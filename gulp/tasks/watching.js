import gulp from "gulp";
import {config} from "../../config.js";
import {scripts} from "./scripts.js";
import {styles} from "./styles.js";

const {watch} = gulp;

export const watching = () => {

    //SCSS
    watch(config.SCSS.srcFiles, styles);

    //JS
    watch(config.JS.srcFiles, scripts);
}
