(function () {
    var gulp = require('gulp');
    var browserSync = require('browser-sync');

    gulp.task('browser-sync', function () {
        var files = [
            'css/**/*.css',
            'js/**/*.js',
            'index.html'
        ];

        browserSync.init(files, {
            server: {
                baseDir: './'
            }
        });
    });
})();