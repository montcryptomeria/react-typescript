'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var concat = require('gulp-concat');
var mergeStream = require('merge-stream');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');
var concatOpt = require('../option/concatOpt.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------

// build
gulp.task(taskName.concat.build, function () {
    var stream = mergeStream();

    concatOpt.entry.forEach(function (item) {
        var concatData = gulp.src(item.src)
          .src([
              'node_modules/react/dist/react-with-addons.js'
          ])
          .pipe(concat(item.out))
          .pipe(gulp.dest(item.dest.build));

        stream.add(concatData);
    });

    return stream.isEmpty() ? null : stream;
});

// release
gulp.task(taskName.concat.release, function () {
    var stream = mergeStream();

    concatOpt.entry.forEach(function (item) {
        var concatData = gulp.src(item.src)
          .src([
              'node_modules/react/dist/react-with-addons.js'
          ])
          .pipe(concat(item.out))
          .pipe(gulp.dest(item.dest.release));

        stream.add(concatData);
    });

    return stream.isEmpty() ? null : stream;
});
