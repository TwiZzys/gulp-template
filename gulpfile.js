import gulp from "gulp";
import {server} from "./gulp/tasks/server.js";
import {watching} from "./gulp/tasks/watching.js";

const {series, parallel} = gulp;
export const dev = series(
    parallel(server, watching)
);

export {
    server,
    watching,
};

export default dev;
