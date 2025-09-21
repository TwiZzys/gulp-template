// gulpfile.js
import gulp from "gulp";

// Таски
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
import {sprite} from "./gulp/tasks/sprite.js";
import {cleanSprite} from "./gulp/tasks/cleanSprite.js";
import {fonts} from "./gulp/tasks/fonts.js";
import {htmlModules} from "./gulp/tasks/htmlModules.js";

const {series, parallel} = gulp;

// Головна dev-збірка
export const dev = series(
    // Спочатку чистимо і створюємо спрайт
    series(cleanSprite, sprite),

    // Потім HTML
    htmlModules,

    // Далі шрифти
    fonts,

    // Потім стилі і скрипти
    styles,
    scripts,

    // Потім картинки і конверсії
    series(
        images,
        imagesModules,
        convertWebp,
        convertWebpModules,
        convertAvif,
        convertAvifModules
    ),

    // І наостанок сервер + вотчери
    parallel(server, watching)
);

// Експортуємо всі таски для CLI
export {
    htmlModules,
    fonts,
    styles,
    scripts,
    images,
    imagesModules,
    convertWebp,
    convertWebpModules,
    convertAvif,
    convertAvifModules,
    sprite,
    cleanSprite,
    server,
    watching,
};

// Таск за замовчуванням
export default dev;
