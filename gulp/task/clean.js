'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var del = require('del');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var path = require('../path.js');
var taskName = require('../taskName.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.clean.build, function (done) {
    del(['.tmp'], done.bind(this));
    return del(path.buildDir);
});

gulp.task(taskName.clean.release, function (done) {
    del(['.tmp'], done.bind(this));
    return del(path.releaseDir);
});
