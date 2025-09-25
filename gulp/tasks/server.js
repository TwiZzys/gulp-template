import browserSync from "browser-sync";
import {config} from "../../config.js";

export const bs = browserSync.create(); // екземпляр BrowserSync

const {baseDir, open, notify, port} = config.server;

export const server = () => {
    bs.init({
        server: {baseDir},
        open,
        notify,
        port
    });
}
