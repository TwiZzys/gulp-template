import gulp from "gulp";
import {server} from "./gulp/tasks/server.js";
import {watching} from "./gulp/tasks/watching.js";
import {htmlModules} from "./gulp/tasks/htmlModules.js";
import {images} from "./gulp/tasks/images.js";
import {imagesModules} from "./gulp/tasks/imagesModules.js";

const {series, parallel} = gulp;
const dev = series(
    htmlModules,
    series(images,imagesModules),
    parallel(server, watching),
);

export {
    server,
    watching,
    htmlModules,
    images,
    imagesModules,
}

export default dev;