'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var changed = require('gulp-changed');
//var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var typescript  = require('typescript');
var ts = require('gulp-typescript');
var tsc  = require('gulp-tsc');
var project = ts.createProject('./src/tsconfig.json', {typescript: typescript});
//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');
var tsOpt = require('../option/tsOpt.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------

// dev
gulp.task(taskName.ts.dev, function () {
    return gulp.src(tsOpt.src)
      .pipe(ts(project))
        .pipe(changed(tsOpt.dest.build))
        .pipe(browserSync.stream());
});

//gulp.task(taskName.ts.dev, function () {
//    var result = gulp.src('./src/ts/**/*ts')
//      .pipe(ts(project));
//    return result.js.pipe(gulp.dest('.tmp'));
//});

// build
gulp.task(taskName.ts.build, function () {
    return gulp.src(tsOpt.src)
      .pipe(ts(project))
        .pipe(changed(tsOpt.dest.build))
        .pipe(gulp.dest(tsOpt.dest.build));
});

// release
gulp.task(taskName.ts.release, function () {
    return gulp.src(tsOpt.src)
      .pipe(ts(project))
        //.pipe(uglify())
        .pipe(gulp.dest(tsOpt.dest.release));
});
