import gulp from "gulp";
import webp from "gulp-webp";
import newer from "gulp-newer";
import {config} from "../../config.js";
import {bs} from "./server.js";

const {imagesFolder} = config.src;
const {srcFilesWebp, baseDir} = config.images;
const {quality} = config.webp;

const {src, dest} = gulp;

export const convertWebp = () => {
    return src(srcFilesWebp, {base: baseDir}) // базова директорія
        .pipe(newer({dest: imagesFolder, ext: ".webp"})) // пропускає файли, які вже є в webp
        .pipe(webp({quality}))
        .pipe(dest(imagesFolder)) // зберігаємо з тією ж структурою
        .on("end", () => bs.reload());
};
