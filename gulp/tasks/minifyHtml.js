import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import {config} from "../../config.js";

export const minifyHtml = () => {
    return gulp.src(config.html.srcIndexFileForDist)
        .pipe(htmlmin(config.htmlmin.options))
        .pipe(gulp.dest(config.dist));
};
