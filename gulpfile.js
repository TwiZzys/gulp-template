import gulp from "gulp";
import {server} from "./gulp/tasks/server.js";
import {watching} from "./gulp/tasks/watching.js";
import {htmlModules} from "./gulp/tasks/htmlModules.js";

const {series, parallel} = gulp;
const dev = series(
    htmlModules,
    parallel(server, watching)
);

export {
    server,
    watching,
    htmlModules,
}

export default dev;