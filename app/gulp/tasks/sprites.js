var gulp = require('gulp'),
  svgSprite = require ('gulp-svg-sprite'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  del = require('del');

var config = {
  mode: {
    css: {
      render: {
        css: {
          template : 'app/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('delExistingSprites', function() {
  return del(['./app/temp/sprites/']);
});

gulp.task('createSprite', function() {
  
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .on('error', function (error) {
      console.log(error);
    })
    .pipe(gulp.dest('./app/temp/sprites/'));

});

gulp.task('icons', ['delExistingSprites','createSprite'], function() {

  return gulp.src('./app/temp/sprites/css/*.css')
  .pipe(rename('_sprite.scss'))
  .pipe(gulp.dest('./app/assets/css/moduels/'));

});