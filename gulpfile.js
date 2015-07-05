var gulp = require('gulp');
var browserify = require('browserify');  // Bundles JS.
var del = require('del');  // Deletes files.
var reactify = require('reactify');  // Transforms React JSX to JS.
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');


var paths = {
  app_js: ['./src/app.js'],
  pager: './demo/pager/'
};

gulp.task('clean', function (done) {
  del(['./dist/bundle.js'], done);
});


gulp.task('js', function () {
  browserify(paths['pager']+'src.js')
    .transform(reactify)
    .bundle()
    .pipe(source('dist.js'))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest(paths['pager']));
});

gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./demo'));
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.app_js, ['js']);
});


gulp.task('default', ['watch', 'js', 'less']);