import {svgo} from "gulp-imagemin";

const root = 'app';

export const config = {
    root,
    server: {
        baseDir: root,
        open: true,
        notify: false,
        port: 3000,
    },
    src: {
        html: {
            all: `${root}/**/*.html`,
            index: `${root}/index.html`,
            indexSrc: `${root}/index-src.html`,
            get watchFiles() {
                return [
                    this.all,
                    `!${this.index}`
                ]
            },
        },
        images: {
            srcFiles: [
                `${root}/images/**/*.{png,jpg,jpeg,gif,ico,svg}`,
                `!${root}/images/sprite-src/*.svg`,
                `!${root}/images/sprite.svg`
            ],
            srcFilesModules: [
                `${root}/modules/*/images/**/*.{png,jpg,jpeg,gif,ico,svg}`,
                `!${root}/modules/*/images/sprite-src/**/*`,
                `!${root}/images/**/*`,
            ],
            baseDir: `${root}/images`,
            baseDirModules: `${root}/modules`,
            get watchFiles() {
                return this.srcFiles

            },
            get watchFilesModules() {
                return this.srcFilesModules
            }
        }
    },
    dest: {
        imagesFolder: `${root}/images`,
    },
    imagemin: {
        mozjpegOpt: {
            quality: 80,
            progressive: true,
        },
        optipngOpt: {
            optimizationLevel: 5,
        },
        svgoOpt: svgo({
            plugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ]
        }),
    }
};
