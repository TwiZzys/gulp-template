const root = 'app';
const dist = 'dist';

export const config = {
    root,
    dist,
    src: {
        jsFolder: `${root}/js`,
        cssFolder: `${root}/css`,
        imagesFolder: `${root}/images`,
        faviconFolder: `${dist}/favicon`,
    },
    server: {
        baseDir: root,
        open: true,
        notify: false,
        port: 3000
    },

    SCSS: {
        srcFiles: [
            `${root}/**/*.scss`
        ],
        mainScss: `${root}/scss/main.scss`,
    },

    JS: {
        srcFiles: [
            `${root}/**/*.js`,
            `!${root}/js/main.min.js`,
        ],
        mainJs: `${root}/js/src/main.js`,
    },

    images: {
        srcFiles: [
            `${root}/images/**/*.{png,jpg,jpeg,gif,ico,svg}`,
            `!${root}/images/sprite-src/*.svg`,
            `!${root}/images/modules/**/*`,
            `!${root}/images/sprite.svg`
        ],
        srcFilesModules: [
            `${root}/modules/*/images/**/*.{png,jpg,jpeg,gif,ico,svg}`,
            `!${root}/modules/*/images/sprite-src/**/*`,
            `!${root}/images/**/*`,
        ],
        srcFilesWebp: [
            `${root}/images/**/*.{png,jpg,jpeg}`,
            `!${root}/images/sprite-src/**/*`,
        ],
        srcFilesWebpModules: [
            `${root}/modules/*/images/**/*.{png,jpg,jpeg}`,
            `!${root}/modules/*/images/sprite-src/**/*`
        ],
        baseDir: `${root}/images/`,
        baseDirModules: `${root}/modules/`,
    },
    sprite: {
        srcFiles: [
            `${root}/images/sprite-src/**/*.svg`,
            `${root}/modules/**/images/sprite-src/**/*.svg`,
        ],
        spriteFile: `${root}/images/sprite.svg`,
    },
    imagemin: {
        quality: 75,
        progressive: true,
        optimizationLevel: 5,
    },
    webp: {
        quality: 75,
    },
    avif: {
        quality: 65,
    },
    fonts: {
        srcFiles: [
            `${root}/fonts/**/*`,
            `!${root}/fonts/**/*.{woff,woff2}`,
        ],
        srcFolder: `${root}/fonts/`,
        fontsFolder: `${root}/fonts`,
        scssFile: `${root}/scss/_fonts.scss`
    },
    html: {
        srcFile: `${root}/index-src.html`,
        srcFilesForDist: `${dist}/**/*.html`,
        srcIndexFileForDist: `${dist}/index.html`,
    },
    htmlmin: {
        options: {
            collapseWhitespace: true, // видаляє зайві пробіли і перенос рядків
            removeComments: true, // видаляє коментарі
            removeRedundantAttributes: true, // видаляє атрибути за замовчуванням
            useShortDoctype: true, // короткий Doctype
            minifyCSS: true, // мінімізує inline CSS
            minifyJS: true, // мінімізує inline JS
            removeEmptyAttributes: true, // видаляє порожні атрибути
            removeOptionalTags: false, // не видаляє необов’язкові теги
            removeEmptyElements: false, // не видаляє пусті елементи
            sortAttributes: true, // сортує атрибути
            sortClassName: true, // сортує класи в class=""
        },
    },
    favicon: {
        srcFiles: `${root}/favicon/**/*.{png,jpg,jpeg,ico,svg}`,
    },
    prod: {
            srcFiles: [
                `${root}/**/*.html`,
                `!${root}/**/*-src.html`, // виключаємо сирцеві HTML
                `${root}/css/**/*.css`,
                `${root}/js/**/*.min.js`,
                `${root}/images/**/*`,
                `!${root}/images/sprite-src{,/**}`, // виключаємо sprite-src
                `${root}/fonts/**/*.{woff,woff2}`,
                `!${root}/modules{,/**}`, // виключаємо modules
            ],
        },
}