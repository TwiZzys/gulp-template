import gulp from "gulp";
import {config} from "../../config.js";
import {scripts} from "./scripts.js";
import {styles} from "./styles.js";
import {images} from "./images.js";
import {imagesModules} from "./imagesModules.js";
import {convertWebp} from "./convertWebp.js";
import {convertWebpModules} from "./convertWebpModules.js";
import {convertAvif} from "./convertAvif.js";
import {convertAvifModules} from "./convertAvifModules.js";

const { watch, series } = gulp;

export const watching = () => {

    // SCSS
    watch(config.SCSS.srcFiles, styles);

    // JS
    watch(config.JS.srcFiles, scripts);

    // --- Глобальні картинки ---
    watch(
        config.images.srcFiles,
        series(
            images,          // копіювання та оптимізація
            convertWebp,     // WebP
            convertAvif      // AVIF
        )
    );

    // --- Модульні картинки ---
    watch(
        config.images.srcFilesModules,
        series(
            imagesModules,       // копіювання та оптимізація
            convertWebpModules,  // WebP
            convertAvifModules   // AVIF
        )
    );
};
