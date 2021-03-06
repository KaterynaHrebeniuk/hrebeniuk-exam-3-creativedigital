const gulp = require('gulp'); // Подключение гульпа

const rootSources = ['./src/*.html'];

/**
 * Это описание задачи, которая будет переносить наши корневые файлы в папку dist
 * @returns {*}
 */
let publishRootFiles = (destinationDir) => {
    gulp.src(rootSources).pipe(gulp.dest(destinationDir))
};

module.exports = publishRootFiles;