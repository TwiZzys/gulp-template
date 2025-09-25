import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
import {bs} from "./server.js";
import {config} from "../../config.js";

const sass = gulpSass(dartSass);

const {src, dest} = gulp;
const {mainScss} = config.SCSS;
const {cssFolder} = config.src;

export const styles = () => {
    return src(mainScss)
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename("style.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(dest(cssFolder))
        .pipe(bs.stream());
}
