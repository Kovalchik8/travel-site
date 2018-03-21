var gulp = require('gulp'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  usemin = require('gulp-usemin'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  rev = require('gulp-rev');

  gulp.task('deleteDist', function() {
    return del('./docs');
  });

  gulp.task('optImages',['deleteDist'], function() {
    return gulp.src('./app/assets/images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images') )
  });

  gulp.task('usemin',['deleteDist', 'css', 'scripts'], function() {
    return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function () {return rev()}, function () {return uglify()}]
    }))
    .pipe(gulp.dest('./docs'))
  });

  gulp.task('build', ['deleteDist', 'usemin', 'optImages']);

