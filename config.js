const root = 'app';

export const config = {
    src: {
        jsFolder: `${root}/js`,
        cssFolder: `${root}/css`,
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
}