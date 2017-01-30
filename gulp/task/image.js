'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var mozjpeg = require('imagemin-mozjpeg');
var pngquant = require('imagemin-pngquant');
var svgo = require('imagemin-svgo');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');
var imageOpt = require('../option/imageOpt.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------

// build
gulp.task(taskName.image.build, function () {
    return gulp.src(imageOpt.src)
        .pipe(gulp.dest(imageOpt.dest.build));
});

// release
gulp.task(taskName.image.release, function () {
    return gulp.src(imageOpt.src)
        .pipe(imagemin({ use: [pngquant(imageOpt.png), mozjpeg(imageOpt.jpg), svgo()] }))
        .pipe(gulp.dest(imageOpt.dest.release));
});
