'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var rename = require('gulp-rename')

gulp.task('workflow', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css/')) // unminified
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('./'))
    .pipe(rename(function (path) {
      if (path.extname === '.css') {
        path.basename += '.min'
      }
    }))
    .pipe(gulp.dest('./dist/css/'))
})

// Watch task
gulp.task('default', function () {
  gulp.watch('./src/scss/**/*.scss', ['workflow'])
})
