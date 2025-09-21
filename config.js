const root = 'app';

export const config = {
    src: {
        jsFolder: `${root}/js`,
        cssFolder: `${root}/css`,
        imagesFolder: `${root}/images`,
    },
    server: {
        baseDir: root,
        open: true,
        notify: false,
        port: 3000
    },

    SCSS: {
        srcFiles: [
            `${root}/**/*.scss`
        ],
        mainScss: `${root}/scss/main.scss`,
    },

    JS: {
        srcFiles: [
            `${root}/**/*.js`,
            `!${root}/js/main.min.js`,
        ],
        mainJs: `${root}/js/src/main.js`,
    },

    images: {
        srcFiles: [
            `${root}/images/**/*.{png,jpg,jpeg,gif,ico,svg}`,
            `!${root}/images/sprite-src/*.svg`,
            `!${root}/images/modules/**/*`,
            `!${root}/images/sprite.svg`
        ],
        srcFilesModules: [
            `${root}/modules/*/images/**/*.{png,jpg,jpeg,gif,ico,svg}`,
            `!${root}/modules/*/images/sprite-src/**/*`,
            `!${root}/images/**/*`,
        ],
        srcFilesWebp: [
            `${root}/images/**/*.{png,jpg,jpeg}`,
            `!${root}/images/sprite-src/**/*`,
        ],
        srcFilesWebpModules: [
            `${root}/modules/*/images/**/*.{png,jpg,jpeg}`,
            `!${root}/modules/*/images/sprite-src/**/*`
        ],
        baseDir: `${root}/images/`,
        baseDirModules: `${root}/modules/`,
    },
    sprite: {
        srcFiles: [
            `${root}/images/sprite-src/**/*.svg`,
            `${root}/modules/**/images/sprite-src/**/*.svg`,
        ],
        spriteFile: `${root}/images/sprite.svg`,
    },
    imagemin: {
        quality: 75,
        progressive: true,
        optimizationLevel: 5,
    },
    webp: {
        quality: 75,
    },
    avif: {
        quality: 65,
    }
}