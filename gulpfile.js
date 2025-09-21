import gulp from "gulp";
import { server } from "./gulp/tasks/server.js";
import { watching } from "./gulp/tasks/watching.js";
import { styles } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { images } from "./gulp/tasks/images.js";
import { imagesModules } from "./gulp/tasks/imagesModules.js";
import { convertWebp } from "./gulp/tasks/convertWebp.js";
import { convertWebpModules } from "./gulp/tasks/convertWebpModules.js";
import { convertAvif } from "./gulp/tasks/convertAvif.js";
import { convertAvifModules } from "./gulp/tasks/convertAvifModules.js";
import { sprite } from "./gulp/tasks/sprite.js";
import { cleanSprite } from "./gulp/tasks/cleanSprite.js";

const { series, parallel } = gulp;

export const dev = series(
    // Спрайт спочатку
    series(cleanSprite, sprite),

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

    // Паралельно сервер і watching
    parallel(server, watching)
);

// Експортуємо всі таски для CLI
export {
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

export default dev;
