import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import {config} from "../../config.js";

const {src,dest} = gulp;

export const minifyHtml = () => {
    return src(config.html.srcIndexFileForDist)
        .pipe(htmlmin(config.htmlmin.options))
        .pipe(dest(config.dist));
};
