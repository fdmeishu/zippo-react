var gulp = require('gulp');
var browserify = require('browserify');  // Bundles JS.
var del = require('del');  // Deletes files.
var reactify = require('reactify');  // Transforms React JSX to JS.
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
  browserify(paths['pager']+'src.js')
    .transform(reactify)
    .bundle()
    .pipe(source('dist.js'))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest(paths['pager']));
});