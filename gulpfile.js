const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const buildSass = () => {
    console.log('Компиляция SASS');

    return src('dist/scss/*.scss')
        .pipe(sass())
        .pipe(dest('build/styles/'))
        .pipe(browserSync.stream());
};

const buildPug = () => {
    console.log('Компиляция Pug');

    return src('dist/pages/*.pug')
        .pipe(pug())
        .pipe(dest('build/'))
        .pipe(browserSync.stream());
};

const browserSyncJob = () => {
    browserSync.init({
        server: 'build/'
    });
    watch('dist/scss/*.scss', buildSass);
    watch('dist/pages/*.pug', buildPug);
};

exports.development = parallel(buildSass, buildPug, browserSyncJob);



