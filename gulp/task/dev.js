'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.dev, [taskName.browserSync, taskName.watch]);
