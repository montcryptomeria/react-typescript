'use strict';

//--------------------------------------------------------------------------------
// パッケージの読み込み
//--------------------------------------------------------------------------------
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var mergeStream = require('merge-stream');

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var taskName = require('../taskName.js');
var spriteOpt = require('../option/spriteOpt.js');

//--------------------------------------------------------------------------------
// タスクの登録
//--------------------------------------------------------------------------------
gulp.task(taskName.sprite, function () {
    var stream = mergeStream();

    spriteOpt.entry.forEach(function (item) {
        var spriteData = gulp.src(item.src)
            .pipe(spritesmith({
                imgName: item.out.img,
                cssName: item.out.sass,
                imgPath: item.path + item.out.img,
                cssFormat: 'scss',
                cssTemplate: 'src/sass/helpers/sprite_template.txt',
                padding: item.padding
            }));

        spriteData.img.pipe(gulp.dest(item.dest.img));
        spriteData.css.pipe(gulp.dest(item.dest.sass));

        stream.add(spriteData);
    });

    return stream.isEmpty() ? null : stream;
});
