'use strict';

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var path = require('../path.js');

//--------------------------------------------------------------------------------
// 設定のエクスポート
//--------------------------------------------------------------------------------
module.exports = {
    // 対象ファイル
    src: path.srcDir + path.imagesDir + '**/!(_)*.+(jpg|png|gif|svg|ico)',
    // 出力先
    dest: {
        build: path.buildDir + path.imagesDir,
        release: path.releaseDir + path.imagesDir
    },
    // jpgの圧縮設定
    jpg: {
        quality: 80
    },
    // pngの圧縮設定
    png: {
        quality: '60-80',
        speed: 1
    }
};