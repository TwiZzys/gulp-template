import gulp from "gulp";
import webp from "gulp-webp";
import newer from "gulp-newer";
import {config} from "../../config.js";

const {imagesFolder} = config.src;
const {srcFilesWebp, baseDir} = config.images;
const {quality} = config.webp;

export const convertWebp = () => {
    return gulp.src(srcFilesWebp, {base: baseDir}) // базова директорія
        .pipe(newer({dest: imagesFolder, ext: ".webp"})) // пропускає файли, які вже є в webp
        .pipe(webp({quality}))
        .pipe(gulp.dest(imagesFolder)); // зберігаємо з тією ж структурою
};
