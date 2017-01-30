# react-typescript

## コマンド
---------------------------------------
### 初期設定
開発環境があるプロジェクトフォルダに移動した上で、Gulpのタスクを実行するために必要なモジュールをnpm経由でインストールします。
プロジェクト内に`node_modules`フォルダができます。Gulpを動作させるためには、`node_modules`が必要です。
プロジェクトごとに、`node_modules`のインストールが必要です。

### 開発用ファイルを一括で出力する

	gulp build

+ GitからPullした時
+ 画像を追加した時
+ スプライト用素材を追加した時
+ ライブラリを追加した時

等々、開発に必要なファイルを追加した時

### 開発をする

	gulp

1. ローカルサーバーが立ち上がる
2. 対象となるファイルを監視
3. ファイル(.html, .scss, .ts)が更新されたらブラウザが自動リロードされる

### 納品用ファイルを一括で出力する
	gulp release

## 設定ファイルのカスタマイズ
---------------------------------------
基本的には対象ファイルと出力先の設定をします

（通常のディレクトリ構成であれば、変更する必要はありません）

### HTMLの設定

gulp/option/htmlOpt.jsを編集

    // 対象ファイル
    src: path.srcDir + path.htmlDir + '**/*.html',

    // 出力先
    dest: {
        build: path.buildDir,
        release: path.releaseDir
    }

### Sassの設定

gulp/option/sassOpt.jsを編集

    // 対象ファイル
    src: path.srcDir + path.sassDir + '**/*.scss',

    // 出力先
    dest: {
        build: path.buildDir + path.cssDir,
        release: path.releaseDir + path.cssDir
    },

    // AutoPrefixerの設定
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'ie >= 9',
            'iOS >= 7',
            'Android >= 4'
        ]
    }

### TypeScriptの設定

gulp/option/tsOpt.jsを編集

    // 対象ファイル
    src: path.srcDir + path.tsDir + '**/*.ts',

    // 出力先
    dest: {
        build: '.tmp',
        release: '.tmp'
    }
'.tmp'出力後jsにbundle


### スプライト画像の設定

gulp/option/spriteOpt.jsを編集

配列になっているので、いくつでも追加が可能

    entry: [
        {
            // 対象ファイル
            src: path.srcDir + path.spriteDir + '!(_)*.+(jpg|png|gif)',

            // 出力先
            dest: {
                img: path.srcDir + path.imagesDir,
                sass: path.srcDir + path.sassDir
            },

            // 出力するファイル名
            out: {
                img: 'sprite.png',
                sass: '_sprite.scss'
            },

            // CSSから画像までのパス（画像名は必要なし）
            path: '../images/',

            // 各画像の間隔を指定
            padding: 10
        }
    ]

### 画像の設定

gulp/option/imageOpt.jsを編集

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

### ファイル連結の設定

gulp/option/concatOpt.jsを編集

配列になっているので、いくつでも追加が可能

    entry: [
        {
            // 対象ファイル
            src: [
                path.srcDir + path.libDir + 'jquery-2.2.1.min.js',
                path.srcDir + path.libDir + 'velocity.min.js',
                path.srcDir + path.libDir + 'slick.min.js'
            ],

            // 出力先
            dest: {
                build: path.buildDir + path.jsDir,
                release: path.releaseDir + path.jsDir
            },

            // 出力するファイル名
            out: 'lib.js'
        }
    ]

### ファイルコピーの設定

gulp/option/copyOpt.jsを編集

配列になっているので、いくつでも追加が可能

動画やフォント等を想定

    entry: [
        {
            // 対象ファイル
            src: path.srcDir + 'video/' + '**/*.*',

            // 出力先
            dest: {
                build: path.buildDir + 'video/',
                release: path.releaseDir + 'video/'
            }
        }
    ]

## CMSに組み込み時の開発環境の役割
---------------------------------------
CMSの構築が必要な場合は、CMS側に組み込んだ時点でHTMLは`CMSから出力されるHTMLを最新版`としてください。

DOMの更新はCMSで行い、`CSS・JSの開発は開発環境`で行います。DOMに大きな修正や更新があった場合は、`開発環境で試した上でCMSに組み込みを依頼`してください。

CMS担当者に渡す際に、`どこが修正されたか`お知らせしてください。Gitの差分を一緒にお知らせしてあげると、ソースレベルでの確認しやすくなります。

## SassでCSSスプライトの変数を読み込む
---------------------------------------
設定ファイルで指定した場所に、
出力したスプライトに関する変数をまとめたSassファイルが出力されます。

Sassにimportした上で指定の`mixin`に該当する変数を渡してください。

なお、拡張子を抜いた`変数名は画像名`に紐づいています。

    // Sprite Sample
    // -------------------------------------------------------------------
    @import "components/sprite/sprite_sample";

    // sprite用mixin
    // -------------------------------------------------------------------
    .sample1 {
        @include sprite($sample);
    }

    // SP（Retina対応）sprite用mixin
    // -------------------------------------------------------------------
    .sample4 {
        @include spriteRetina($sample);
    }

    // sprite用mixin出力結果
    // -------------------------------------------------------------------
    width: 50px;
    height: 50px;
    background-image: url(../images/sprite_sample.png);
    background-position: 0 0;

    // SP（Retina対応）sprite用mixin出力結果
    // -------------------------------------------------------------------
    width: 25px;
    height: 25px;
    background-image: url(../images/sprite_sample.png);
    background-position: 0 0;
    background-size: 25px 50px;