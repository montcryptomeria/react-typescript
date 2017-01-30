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
gulp.task(taskName.build, [taskName.clean.build], function (callback) {
    runSequence(
        taskName.sprite,
        taskName.concat.build,
        taskName.copy.build,
        taskName.html.build,
        taskName.sass.build,
        taskName.ts.build,
        taskName.js.build,
        taskName.image.build,
        taskName.cache.build,
        callback
    );
});
