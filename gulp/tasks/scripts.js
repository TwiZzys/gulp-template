import gulp from "gulp";
import {bs} from "./server.js";
import webpackStream from "webpack-stream";
import webpack from "webpack";
import webpackConfig from "../../webpack.config.js";
import {config} from "../../config.js";

const {src, dest} = gulp;
const {mainJs} = config.JS;
const {jsFolder} = config.src;

export const scripts = () => {
    return src(mainJs)
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(dest(jsFolder))
        .on("end", () => {
            bs.reload();
        });
}
