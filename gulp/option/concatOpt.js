'use strict';

//--------------------------------------------------------------------------------
// 設定ファイルの読み込み
//--------------------------------------------------------------------------------
var path = require('../path.js');

//--------------------------------------------------------------------------------
// 設定のエクスポート
//--------------------------------------------------------------------------------
module.exports = {
    entry: [
        // 見本
        // {
        //     // 対象ファイル
        //     src: [
        //         path.srcDir + path.libDir + 'jquery-2.2.1.min.js',
        //         path.srcDir + path.libDir + 'velocity.min.js',
        //         path.srcDir + path.libDir + 'slick.min.js'
        //     ],
        //     // 出力先
        //     dest: {
        //         build: path.buildDir + '/common/' + path.jsDir,
        //         release: path.releaseDir + '/common/' + path.jsDir
        //     },
        //     // 出力するファイル名
        //     out: 'lib.js'
        // }
    ]
};