'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var mergeStream = require('merge-stream');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');
var copyOpt = require('../option/copyOpt.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------

// build
gulp.task(taskName.copy.build, function () {
    var stream = mergeStream();

    copyOpt.entry.forEach(function (item) {
        var copyData = gulp.src(item.src)
            .pipe(gulp.dest(item.dest.build));

        stream.add(copyData);
    });

    return stream.isEmpty() ? null : stream;
});

// release
gulp.task(taskName.copy.release, function () {
    var stream = mergeStream();

    copyOpt.entry.forEach(function (item) {
        var copyData = gulp.src(item.src)
            .pipe(gulp.dest(item.dest.release));

        stream.add(copyData);
    });

    return stream.isEmpty() ? null : stream;
});
