import gulp from "gulp";
import {config} from "../../config.js";
import {cleanDist} from "./cleanDist.js";
import {favicon} from "./favicon.js";

const {src, dest, series} = gulp;

export const prod = series(
    cleanDist,
    favicon,
    () => {
        return src(config.prod.srcFiles, {base: config.root})
            .pipe(dest(config.dist));
    }
);
