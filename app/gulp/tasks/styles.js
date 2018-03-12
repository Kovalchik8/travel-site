var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  postvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  concat = require('gulp-concat'),
  importCss = require('postcss-import'),
  cssnano = require('gulp-cssnano'),
  mixins = require('postcss-mixins');


gulp.task('css', function () {
  
  return gulp.src('./app/assets/css/style.scss')
    .pipe(postcss([importCss, mixins, postvars, nested, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(concat('style.css'))
    // .pipe(cssnano({zindex: false}))
    .pipe(gulp.dest('./app/temp/css/'));

});