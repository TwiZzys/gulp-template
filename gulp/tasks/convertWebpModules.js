import gulp from "gulp";
import webp from "gulp-webp";
import rename from "gulp-rename";
import path from "path";
import newer from "gulp-newer";
import {config} from "../../config.js";

const {imagesFolder} = config.src;
const {srcFilesWebpModules, baseDirModules} = config.images;
const {quality} = config.webp;
const {src, dest} = gulp;

export const convertWebpModules = () => {
    return src(srcFilesWebpModules, {base: baseDirModules})
        // Перевіряємо тільки по webp-версії
        .pipe(newer({
            dest: imagesFolder,
            ext: ".webp"
        }))
        .pipe(webp({quality: config.webp.quality}))
        .pipe(rename((file) => {
            // file.dirname = <module>/images/... → видаляємо 'images'
            const parts = file.dirname.split(path.sep);
            if (parts[1] === "images") parts.splice(1, 1);
            file.dirname = parts.join(path.sep);
        }))
        .pipe(dest(imagesFolder));
};
