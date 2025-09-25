import gulp from "gulp";
import avif from "gulp-avif";
import newer from "gulp-newer";
import {config} from "../../config.js";
import {bs} from "./server.js";

const {imagesFolder} = config.src;
const {srcFilesWebp, baseDir} = config.images;
const {quality} = config.webp;

const {src, dest} = gulp;

export const convertAvif = () => {
    return src(srcFilesWebp, {base: baseDir}) // базова директорія
        .pipe(newer({dest: imagesFolder, ext: ".avif"})) // пропускає вже існуючі
        .pipe(avif({quality})) // якість можна змінити
        .pipe(dest(imagesFolder)) // зберігаємо структуру
        .on("end", () => bs.reload());
};
