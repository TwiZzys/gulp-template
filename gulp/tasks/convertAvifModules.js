import gulp from "gulp";
import avif from "gulp-avif";
import rename from "gulp-rename";
import path from "path";
import newer from "gulp-newer";
import {config} from "../../config.js";
import {bs} from "./server.js";

const {imagesFolder} = config.src;
const {srcFilesWebpModules, baseDirModules} = config.images;
const {quality} = config.webp;
const {src, dest} = gulp;

export const convertAvifModules = () => {
    return src(srcFilesWebpModules, {base: baseDirModules})
        .pipe(newer({
            dest: imagesFolder,
            ext: ".avif"
        }))
        .pipe(avif({quality}))
        .pipe(rename((file) => {
            const parts = file.dirname.split(path.sep);
            if (parts[1] === "images") parts.splice(1, 1); // прибираємо "images"
            file.dirname = parts.join(path.sep);
        }))
        .pipe(dest(imagesFolder))
        .on("end", () => bs.reload());

};
