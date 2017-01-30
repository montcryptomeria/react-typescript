'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var changed = require('gulp-changed');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var browserify  = require('browserify');
var browserSync = require('browser-sync');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');
var jsOpt = require('../option/jsOpt.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------

// dev
gulp.task(taskName.js.dev, function () {
    var b = browserify(jsOpt.src);
  return b.bundle()
    .pipe(source(jsOpt.dest.build))
    .pipe(changed(''))
    .pipe(browserSync.stream());
});

// build
gulp.task(taskName.js.build, function () {
    var b = browserify(jsOpt.src);
    return b.bundle()
        .pipe(source(jsOpt.dest.build))
        .pipe(gulp.dest(''));
});

// release
gulp.task(taskName.js.release, function () {
    var b = browserify(jsOpt.src);
    return b.bundle()
        .pipe(source(jsOpt.dest.release))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(''));
});
