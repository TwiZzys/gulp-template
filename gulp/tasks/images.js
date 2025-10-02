import gulp from "gulp";
import imagemin, {mozjpeg, optipng} from "gulp-imagemin";
import newer from "gulp-newer";
import {config} from "../../config.js";
import {bs} from "./server.js";

const {imagesFolder} = config.dest;
const {srcFiles, baseDir} = config.src.images;
const {mozjpegOpt, optipngOpt, svgoOpt} = config.imagemin;
const {src, dest} = gulp;

export const images = () => {
    return src(srcFiles, {base: baseDir})
        .pipe(newer(imagesFolder))
        .pipe(
            imagemin([
                mozjpeg(mozjpegOpt),
                optipng(optipngOpt),
                svgoOpt,
            ])
        )
        .pipe(dest(imagesFolder))
        .on("end", () => bs.reload());
};
