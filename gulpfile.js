// gulpfile.js
import gulp from "gulp";

// Таски
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
import { fonts } from "./gulp/tasks/fonts.js";
import { htmlModules } from "./gulp/tasks/htmlModules.js";
import { favicon } from "./gulp/tasks/favicon.js";
import { cleanDist } from "./gulp/tasks/cleanDist.js";
import { imgToPicture } from "./gulp/tasks/imgToPicture.js";
import { minifyHtml } from "./gulp/tasks/minifyHtml.js";
import { prod } from "./gulp/tasks/prod.js";

const { series, parallel } = gulp;

// -------------------
// Dev-збірка
// -------------------
const dev = series(
    series(cleanSprite, sprite),
    htmlModules,
    fonts,
    styles,
    scripts,
    series(
        images,
        imagesModules,
        convertWebp,
        convertWebpModules,
        convertAvif,
        convertAvifModules
    ),
    parallel(server, watching)
);

// -------------------
// Build / Production
// -------------------
const build = series(
    cleanDist,
    favicon,
    prod,
    imgToPicture,
    minifyHtml
);

// -------------------
// Експорт всіх тасків для CLI
// -------------------
export {
    dev,
    build,
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
    favicon,
    cleanDist,
    imgToPicture,
    minifyHtml,
    prod
};

// -------------------
// Таск за замовчуванням
// -------------------
export default dev;
