import gulp from "gulp";
import {server} from "./gulp/tasks/server.js";
import {watching} from "./gulp/tasks/watching.js";
import {styles} from "./gulp/tasks/styles.js";
import {scripts} from "./gulp/tasks/scripts.js";
import {images} from "./gulp/tasks/images.js";
import {imagesModules} from "./gulp/tasks/imagesModules.js";
import {convertWebp} from "./gulp/tasks/convertWebp.js";
import {convertWebpModules} from "./gulp/tasks/convertWebpModules.js";
import {convertAvif} from "./gulp/tasks/convertAvif.js";
import {convertAvifModules} from "./gulp/tasks/convertAvifModules.js";

const {series, parallel} = gulp;

export const dev = series(
    styles,
    scripts,
    series(
        images,
        imagesModules,
        convertWebp,
        convertWebpModules,
        convertAvif,
        convertAvifModules
    ),
    parallel(server, watching)
);

export {
    styles,
    scripts,
    images,
    imagesModules,
    convertWebp,
    convertWebpModules,
    convertAvif,
    convertAvifModules,
    server,
    watching,
};

export default dev;
