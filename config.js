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
        }
    }
};
