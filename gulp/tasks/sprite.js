import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";
import path from "path";
import {config} from "../../config.js";
import {bs} from "./server.js";

const {srcFiles} = config.sprite;
const {imagesFolder} = config.src;
const {src, dest} = gulp;

export const sprite = () => {
    return src(srcFiles,
        {
            base: 'app'
        }
    )
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg",
                    example: false
                }
            },
            shape: {
                id: {
                    generator: (filePath) => {
                        // відносний шлях
                        const relativePath = path.relative(process.cwd(), filePath);
                        const parts = relativePath.split(/[\\/]/);
                        const iconName = path.basename(filePath, ".svg");

                        const modulesIndex = parts.indexOf("modules");
                        if (modulesIndex !== -1) {
                            const moduleName = parts[modulesIndex + 1];
                            return `${moduleName}-${iconName}`;
                        }

                        return iconName; // глобальні
                    }
                },
                transform: [
                    {
                        svgo: {
                            plugins: [
                                {name: "removeAttrs", params: {attrs: "(fill|stroke|stroke-width|style)"}},
                                {name: "removeComments", active: true},
                                {name: "removeTitle", active: true},
                                {name: "removeDimensions", active: true}
                            ]
                        }
                    }
                ]
            }
        }))
        .pipe(dest(imagesFolder))
        .on("end", () => bs.reload());
};
