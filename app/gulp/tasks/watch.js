var gulp = require('gulp'),
  watch = require('gulp-watch');

  
gulp.task('watch', function () {

  watch('./app/assets/css/**/*.scss', function () {
    gulp.start('css');
  });

  watch('./app/assets/scripts/**/*.js', function () {
    gulp.start('scripts');
  });

});