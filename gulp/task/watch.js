'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');
var watchOpt = require('../option/watchOpt.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.watch, function () {
    watch(watchOpt.html, function () {
        runSequence(
            taskName.html.dev,
            taskName.reload.normal
        );
    }).on('error', function () { });

    watch(watchOpt.sass, function () {
        runSequence(
            taskName.sass.dev,
            taskName.reload.stream
        );
    }).on('error', function () { });

    watch(watchOpt.ts, function () {
        runSequence(
            taskName.ts.dev,
            taskName.cache.dev,
            taskName.reload.normal
        );
    }).on('error', function () { });
});
