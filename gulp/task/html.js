'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');
var htmlOpt = require('../option/htmlOpt.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------

// dev
gulp.task(taskName.html.dev, function () {
    return gulp.src(htmlOpt.src)
        .pipe(changed(htmlOpt.dest.build))
        .pipe(gulp.dest(htmlOpt.dest.build))
        .pipe(browserSync.stream());
});

// build
gulp.task(taskName.html.build, function () {
    return gulp.src(htmlOpt.src)
        .pipe(changed(htmlOpt.dest.build))
        .pipe(gulp.dest(htmlOpt.dest.build));
});

// release
gulp.task(taskName.html.release, function () {
    return gulp.src(htmlOpt.src)
        .pipe(gulp.dest(htmlOpt.dest.release));
});
