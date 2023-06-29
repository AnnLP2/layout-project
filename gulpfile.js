const { watch } = require('gulp');

const changeAppStylesFile = (done) => {
    console.log('Scss файл изменился');

    done();
};

const checkFileStructure = (done) => {
    console.log('Изменилась структура файлов');

    done();
};

const watchers = () => {
    watch('dist/scss/**/*.scss', { events: 'change' }, changeAppStylesFile);

    watch('dist/', { events: ['add', 'unlink'] }, checkFileStructure);
};

exports.watchers = watchers;
