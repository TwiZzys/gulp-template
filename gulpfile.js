import gulp from "gulp";
import {server} from "./gulp/tasks/server.js";
import {watching} from "./gulp/tasks/watching.js";
import {styles} from "./gulp/tasks/styles.js";
import {scripts} from "./gulp/tasks/scripts.js";
import {images} from "./gulp/tasks/images.js";
import {imagesModules} from "./gulp/tasks/imagesModules.js";
import {convertWebp} from "./gulp/tasks/convertWebp.js";
import {convertWebpModules} from "./gulp/tasks/convertWebpModules.js";

const {series, parallel} = gulp;
export const dev = series(
    styles,
    scripts,
    series(images, imagesModules, convertWebp, convertWebpModules),
    parallel(server, watching)
);

export {
    styles,
    scripts,
    images,
    imagesModules,
    convertWebp,
    convertWebpModules,
    server,
    watching,
};

export default dev;
