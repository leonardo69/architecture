var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('serve', function () {
  
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["*.html","app/**/*.js","app/**/*.html"]).on("change", reload);
   // gulp.watch("app/**/*.js").on("change", reload);
});
