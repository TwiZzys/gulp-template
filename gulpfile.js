import gulp from "gulp";
import {server} from "./gulp/tasks/server.js";

const {series, parallel} = gulp;
const dev = series(
    parallel(server)
);

export {
    server,
}

export default dev;