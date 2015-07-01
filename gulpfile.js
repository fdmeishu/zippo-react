// Load some modules which are installed through NPM.
var gulp = require('gulp');
var browserify = require('browserify');  // Bundles JS.
var del = require('del');  // Deletes files.
var reactify = require('reactify');  // Transforms React JSX to JS.
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');


var paths = {
  app_js: ['./src/app.js']
};

gulp.task('clean', function (done) {
  del(['./dist/bundle.js'], done);
});


gulp.task('js', ['clean'], function () {
  // Browserify/bundle the JS.
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('less', ['clean'], function () {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.app_js, ['js']);
});


gulp.task('default', ['watch', 'js', 'less']);