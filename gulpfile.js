import gulp from "gulp";
import {server} from "./gulp/tasks/server.js";
import {watching} from "./gulp/tasks/watching.js";
import {styles} from "./gulp/tasks/styles.js";
import {scripts} from "./gulp/tasks/scripts.js";

const {series, parallel} = gulp;
export const dev = series(
    styles,
    scripts,
    parallel(server, watching)
);

export {
    styles,
    scripts,
    server,
    watching,
};

export default dev;
