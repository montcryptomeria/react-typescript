'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var runSequence = require('run-sequence');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.release, [taskName.clean.release], function (callback) {
    runSequence(
        taskName.sprite,
        taskName.concat.release,
        taskName.copy.release,
        taskName.html.release,
        taskName.sass.release,
        taskName.ts.release,
        taskName.js.release,
        taskName.image.release,
        taskName.cache.release,
        callback
    );
});
