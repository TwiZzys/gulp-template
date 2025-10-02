import gulp from "gulp";
import {config} from "../../config.js";
import {htmlModules} from "./htmlModules.js";
import {images} from "./images.js";
import {imagesModules} from "../../gulpfile.js";

const {watch} = gulp;


export const watching = () => {
    //HTML Модулі
    watch(config.src.html.watchFiles, htmlModules);

    //Картинки
    watch(config.src.images.watchFiles, images);
    //Модульні картинки
    watch(config.src.images.watchFilesModules, imagesModules);
}