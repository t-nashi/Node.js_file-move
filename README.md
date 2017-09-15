# Node.js_file-move
gulpとrimrafを使ってファイルの移動（copy&amp;delete）を行う

## このサンプル制作時の環境
* Windows10 Pro、64bit、32GB

## 事前に用意するもの
* Node.js（本サンプル制作時はv8.4.0）
* gulp.js（-g/グローバルインストール）

## 開発手順（win:cmd、mac:tarminal）
1. npm install （package.jsonにあるライブラリがインストールされる）
2. gulp move （gulpfile.jsのdefaultコマンドが実行される）

## npm installでインストールされるライブラリ
* gulp
* gulp-rimraf

## gulpで実行されること
* src ＞ public へファイル移動
