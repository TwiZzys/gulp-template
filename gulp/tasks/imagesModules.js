import gulp from "gulp";
import imagemin, {mozjpeg, optipng, svgo} from "gulp-imagemin";
import newer from "gulp-newer";
import rename from "gulp-rename";
import path from "path";
import {config} from "../../config.js";
import {images} from "./images.js";
import {bs} from "./server.js";

const {imagesFolder} = config.src;
const {srcFilesModules, baseDirModules} = config.images;
const {quality, progressive, optimizationLevel} = config.imagemin;

export const imagesModules = () => {
    return gulp.src(srcFilesModules, {base: baseDirModules})
        .pipe(newer(imagesFolder))
        .pipe(
            imagemin([
                mozjpeg({
                    quality,
                    progressive
                }),
                optipng({optimizationLevel}),
                svgo()
            ])
        )
        .pipe(rename((file) => {
            // видаляємо проміжну 'images', але зберігаємо структуру модуля
            const parts = file.dirname.split(path.sep);
            const imagesIndex = parts.indexOf("images");
            if (imagesIndex !== -1) parts.splice(imagesIndex, 1);
            file.dirname = parts.join(path.sep);
        }))
        .pipe(gulp.dest(imagesFolder))
        .on("end", () => bs.reload());
};
