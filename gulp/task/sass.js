'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var combineMq = require('gulp-combine-mq');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');
var sassOpt = require('../option/sassOpt.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------

// dev
gulp.task(taskName.sass.dev, function () {
    return gulp.src(sassOpt.src)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Sass Compile Error',
                message: 'Error: <%= error.message %>'
            })
        }))
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(autoprefixer(sassOpt.autoprefixer))
        .pipe(combineMq({ beautify: true }))
        .pipe(gulp.dest(sassOpt.dest.build))
        .pipe(browserSync.stream());
});

// build
gulp.task(taskName.sass.build, function () {
    return gulp.src(sassOpt.src)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(autoprefixer(sassOpt.autoprefixer))
        .pipe(combineMq({ beautify: true }))
        .pipe(gulp.dest(sassOpt.dest.build));
});

// release
gulp.task(taskName.sass.release, function () {
    return gulp.src(sassOpt.src)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(autoprefixer(sassOpt.autoprefixer))
        .pipe(combineMq({ beautify: true }))
        .pipe(cssmin())
        .pipe(gulp.dest(sassOpt.dest.release));
});
