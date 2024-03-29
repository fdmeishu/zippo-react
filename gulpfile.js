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

gulp.task('clean', function () {
  del(['./demo/pager/static/*.css','./demo/pager/static/*.js'],{force:true});
});

gulp.task('build:pager', ['clean'], function () {
  browserify('./demo/pager/index.js')
    .transform(reactify)
    .bundle()
    .pipe(source('pager.js'))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest('./demo/pager/static'))
    .pipe(gulp.dest('../../devspace/nodeproxy/src/web_inf/front/public'));
  gulp.src('./src/pager/*.less')
    .pipe(less())
    .pipe(gulp.dest('./demo/pager/static'))
    .pipe(gulp.dest('../../devspace/nodeproxy/src/web_inf/front/public'));
  gulp.src('./demo/pager/pager.html')
    .pipe(gulp.dest('./node/proxy/views'));
});

gulp.task('run', ['build:pager']);

gulp.task('less', function () {
  return gulp.src('./src/pager/*.less')
    .pipe(less())
    .pipe(gulp.dest('./demo'));
});

gulp.task('watch', function () {
  gulp.watch('./src/pager/*', ['build:pager']);
});

gulp.task('default', ['watch', 'run']);