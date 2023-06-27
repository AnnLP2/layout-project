const { src, dest, parallel } = require('gulp');

const copyScss = () => {
    return src(['dist/**/*.scss', '!dist/pages/**'])
        .pipe(dest('build/styles'));
};

const copyJS = () => {
    return src(['dist/scripts/*.js'])
        .pipe(dest('build/scripts'));
};

const copyHtml = () => {
    return src(['dist/pages/*.html'])
        .pipe(dest('build/pages'));
};

exports.copy = parallel(copyScss, copyJS, copyHtml);

