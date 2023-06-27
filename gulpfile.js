const {src, dest, parallel} = require('gulp');

const sassCompile = (done) => {
    console.log('Compile SASS to CSS');

    done();
};

const pugCompile = (done) => {
    console.log('Compile Pug to HTML');

    done();
};

const imagesOptimize = (done) => {
    console.log('Optimize Images');

    done();
};

exports.default = parallel(sassCompile, pugCompile, imagesOptimize);

