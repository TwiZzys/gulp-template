import gulp from "gulp";
import {config} from "../../config.js";

const {src, dest} = gulp;

export const favicon = () => {
    return src(config.favicon.srcFiles)
        .pipe(dest(config.src.faviconFolder));
};
