import gulp from "gulp";
import {config} from "../../config.js";
import {htmlModules} from "./htmlModules.js";

const {watch} = gulp;


export const watching = () => {
    watch(config.src.html.watchFiles, htmlModules);
}