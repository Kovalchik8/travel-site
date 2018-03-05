var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
postvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
concat = require('gulp-concat'),
importCss = require('postcss-import');

gulp.task('html', function() {
  console.log('Some useful change about your HTML');
})

// css
gulp.task('css', function() {
  console.log('scss is working');
  return gulp.src('./app/assets/css/style.scss')
  .pipe(postcss([importCss, postvars, nested, autoprefixer]) )
  .pipe(concat('style.css') )
  .pipe(gulp.dest('./app/temp/css/')); 

});

// watch
gulp.task('watch', function() {

  // watch('./app/index.html', function () {
  //   gulp.start('html');
  // });

  watch('./app/assets/css/**/*.scss', function () {
    gulp.start('css');
  });

});