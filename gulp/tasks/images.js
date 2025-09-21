import gulp from "gulp";
import imagemin, {mozjpeg, optipng, svgo} from "gulp-imagemin";
import newer from "gulp-newer";
import {config} from "../../config.js";
import {bs} from "./server.js";

const {srcFiles, baseDir} = config.images;
const {imagesFolder} = config.src;
const {quality, progressive, optimizationLevel} = config.imagemin;
const {src, dest} = gulp;

export const images = () => {
    return src(srcFiles, {base: baseDir})
        .pipe(newer(imagesFolder))
        .pipe(
            imagemin([
                mozjpeg({
                    quality,
                    progressive,
                }),
                optipng({optimizationLevel}),
                svgo()
            ])
        )
        .pipe(dest(imagesFolder))
        .on("end", () => bs.reload());
};
