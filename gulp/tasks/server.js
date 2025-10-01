import browserSync from "browser-sync";
import {config} from "../../config.js";

export const bs = browserSync.create(); // екземпляр BrowserSync

const {baseDir, ...options} = config.server;

export const server = (done) => {
    bs.init({
        server: {baseDir},
        ...options
    });
};
