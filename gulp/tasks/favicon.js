import gulp from "gulp";
import {config} from "../../config.js";

export const favicon = () => {
    return gulp.src(config.favicon.srcFiles)
        .pipe(gulp.dest(config.src.faviconFolder));
};
