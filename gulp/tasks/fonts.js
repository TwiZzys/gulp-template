import gulp from "gulp";
import fonter from "gulp-fonter";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";
import fs from "fs";
import path from "path";
import {config} from "../../config.js";
import {bs} from "./server.js";

const {src, dest, series, parallel} = gulp;
const {fontsFolder, srcFolder, scssFile} = config.fonts;

const reload = (done) => {
    bs.reload();
    done();
};

function getFontWeight(name) {
    name = name.toLowerCase();
    if (name.includes("thin")) return 100;
    if (name.includes("extralight") || name.includes("ultralight")) return 200;
    if (name.includes("light")) return 300;
    if (name.includes("regular") || name.includes("normal")) return 400;
    if (name.includes("medium")) return 500;
    if (name.includes("semibold") || name.includes("demibold")) return 600;
    if (name.includes("bold")) return 700;
    if (name.includes("extrabold") || name.includes("ultrabold")) return 800;
    if (name.includes("black") || name.includes("heavy")) return 900;
    return 400;
}

function getFontStyle(name) {
    name = name.toLowerCase();
    if (name.includes("italic")) return "italic";
    if (name.includes("oblique")) return "oblique";
    return "normal";
}

// -------------------
// Конвертація otf → ttf
// -------------------
export const otfToTtf = () => {
    return src(`${srcFolder}/*.otf`)
        .pipe(fonter({formats: ["ttf"]}))
        .pipe(dest(srcFolder));
};

// -------------------
// Конвертація ttf → woff + woff2
// -------------------
export const ttfToWoff = () => {
    return src(`${srcFolder}/*.ttf`)
        .pipe(ttf2woff())
        .pipe(dest(fontsFolder));
};

export const ttfToWoff2 = () => {
    return src(`${srcFolder}/*.ttf`)
        .pipe(ttf2woff2())
        .pipe(dest(fontsFolder));
};

// -------------------
// Генерація fonts.scss
// -------------------
export const fontsStyle = (done) => {
    if (!fs.existsSync(fontsFolder)) {
        console.log("⚠️ Папка fonts не знайдена:", fontsFolder);
        done();
        return;
    }

    const files = fs.readdirSync(fontsFolder);

    const fontFiles = [...new Set(
        files
            .filter(f => f.endsWith(".woff") || f.endsWith(".woff2"))
            .map(f => path.basename(f, path.extname(f)))
    )];

    if (fontFiles.length === 0) {
        console.log("⚠️ Немає шрифтів для генерації fonts.scss");
        done();
        return;
    }

    // Створюємо або очищаємо fonts.scss
    fs.writeFileSync(scssFile, "");

    let fontObjects = fontFiles.map(fontFile => {
        const parts = fontFile.split("-");
        const fontName = parts.length > 1 ? parts.slice(0, -1).join(" ") : parts[0];
        const fontVariant = parts.length > 1 ? parts.slice(-1)[0] : "Regular";
        const weight = getFontWeight(fontVariant);
        const style = getFontStyle(fontVariant);
        return {fontFile, fontName, fontVariant, weight, style};
    });

    fontObjects.sort((a, b) => {
        if (a.fontName.toLowerCase() < b.fontName.toLowerCase()) return -1;
        if (a.fontName.toLowerCase() > b.fontName.toLowerCase()) return 1;
        return a.weight - b.weight;
    });

    const writtenFonts = new Set();

    fontObjects.forEach(obj => {
        const {fontFile, fontName, fontVariant, weight, style} = obj;

        const localFull = `"${fontName} ${fontVariant}"`;
        const localShort = `"${fontName}"`;

        // Багаторядковий src з 4 пробілами
        const fontFace = `@font-face {
    font-family: "${fontName}";
    src: 
    local(${localFull}), 
    local(${localShort}), 
    url("../fonts/${fontFile}.woff2") format("woff2"), 
    url("../fonts/${fontFile}.woff") format("woff");
    font-weight: ${weight};
    font-style: ${style};
    font-display: swap;
}

`;

        const fontKey = `${fontName}-${weight}-${style}`;
        if (!writtenFonts.has(fontKey)) {
            fs.appendFileSync(scssFile, fontFace);
            writtenFonts.add(fontKey);
        }
    });

    console.log("✅ Файл fonts.scss згенеровано");
    done();
};

export const fonts = series(
    otfToTtf,
    parallel(ttfToWoff, ttfToWoff2),
    fontsStyle,
    reload
);
