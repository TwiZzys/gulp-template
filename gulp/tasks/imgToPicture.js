import gulp from "gulp";
import fs from "fs";
import path from "path";
import {config} from '../../config.js'

export const imgToPicture = () => {
    return gulp.src(config.html.srcFilesForDist)
        .on('data', file => {
            let content = file.contents.toString();

            // Лишаємо існуючі <picture> без змін
            const pictureMatches = [];
            content = content.replace(/<picture>[\s\S]*?<\/picture>/gi, match => {
                pictureMatches.push(match);
                return `___PICTURE_PLACEHOLDER_${pictureMatches.length - 1}___`;
            });

            // Замінюємо всі <img> поза <picture>
            content = content.replace(/<img\s+([^>]*?)src=["']([^"']+\.(?:jpe?g|png|webp))["']([^>]*)>/gi,
                (match, preAttrs, src, postAttrs) => {

                    const attrs = (preAttrs + postAttrs).trim();

                    const altMatch = /alt=["']([^"']*)["']/.exec(attrs);
                    const alt = altMatch ? altMatch[1] : "";

                    const classMatch = /class=["']([^"']*)["']/.exec(attrs);
                    const classAttr = classMatch ? classMatch[1] : "";

                    const ext = path.extname(src).slice(1).toLowerCase();
                    const mimeType = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' :
                        ext === 'png' ? 'image/png' :
                            ext === 'webp' ? 'image/webp' : '';

                    let pictureHtml = `<picture>\n`;

                    // Додаємо AVIF якщо оригінал не AVIF
                    if (!["webp", "avif"].includes(ext)) {
                        const avifSrc = src.replace(/\.\w+$/, ".avif");
                        pictureHtml += `  <source srcset="${avifSrc}" type="image/avif">\n`;
                    }

                    // Додаємо WebP якщо оригінал не WebP
                    if (ext !== "webp") {
                        const webpSrc = src.replace(/\.\w+$/, ".webp");
                        pictureHtml += `  <source srcset="${webpSrc}" type="image/webp">\n`;
                    }

                    // Додаємо оригінальний формат
                    pictureHtml += `  <source srcset="${src}" type="${mimeType}">\n`;

                    // fallback <img>
                    pictureHtml += `  <img src="${src}" alt="${alt}"${classAttr ? ` class="${classAttr}"` : ""}>\n</picture>`;

                    return pictureHtml;
                });

            // Повертаємо назад існуючі <picture>
            content = content.replace(/___PICTURE_PLACEHOLDER_(\d+)___/g, (_, index) => pictureMatches[index]);

            fs.writeFileSync(file.path, content);
        });
};
