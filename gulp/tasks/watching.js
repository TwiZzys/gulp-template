import gulp from "gulp";
import {config} from "../../config.js";
import {scripts} from "./scripts.js";
import {styles} from "./styles.js";
import {images} from "./images.js";
import {imagesModules} from "./imagesModules.js";

const {watch, series} = gulp;

export const watching = () => {

    //SCSS
    watch(config.SCSS.srcFiles, styles);

    //JS
    watch(config.JS.srcFiles, scripts);
    // Глобальні картинки
    watch(config.images.srcFiles, series(images));

    // Модульні картинки
    watch(config.images.srcFilesModules, series(imagesModules));

}
