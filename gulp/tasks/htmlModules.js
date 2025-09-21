import gulp from "gulp";
import fileInclude from "gulp-file-include";
import rename from "gulp-rename";
import {bs} from "./server.js";
import {config} from "../../config.js";

const {src, dest} = gulp;

export const htmlModules = () => {
    return src(config.html.srcFile) // робочий файл з @@include
        .pipe(fileInclude({
            prefix: "@@",      // синтаксис @@include
            basepath: "@file"  // шукати файли відносно поточного файлу
        }))
        .pipe(rename("index.html"))     // фінальний файл
        .pipe(dest(config.root))              // фінальна папка
        .pipe(bs.stream());             // оновлення браузера
};
