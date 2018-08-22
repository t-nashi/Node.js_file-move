# Node.js_file-move
gulpとrimrafを使ってファイルの移動（copy&amp;delete）を行う
<br><br><br>


## このサンプル制作時の環境
* Windows10 Pro、64bit、32GB
<br><br><br>



## 事前に用意するもの
* Node.js（本サンプル制作時はv8.4.0）
* gulp.js（-g/グローバルインストール）
<br><br><br>



## 開発手順（win:cmd、mac:tarminal）
1. npm install （package.jsonにあるライブラリがインストールされる）
2. gulp move （gulpfile.jsのdefaultコマンドが実行される）
<br><br><br>



## npm installでインストールされるライブラリ
* gulp
* gulp-rimraf
<br><br><br>



## gulpで実行されること
* src ＞ public へファイル移動
<br><br><br>



## 知っておくと便利なnpmコマンド一覧
* `npm root -g` … グローバルのルート（node_modules）を調べる
* `npm root` … プロジェクトのルート（node_modules）を調べる
* `npm ls -g --depth=0` … グローバルにインストールされているパッケージを確認
* `npm ls --depth=0` … プロジェクトにインストールされているパッケージを確認
* `npm init -y` … package.jsonをプロジェクトに生成（オプション「-y」が全てyes回答のショートカット）
* `npm install xxxxx --save` … プロジェクトにパッケージをインストールし、情報を「package.json」に書き込む（dependencies）
* `npm i xxxxx -s` … 上記のショートカットバージョン
* `npm install xxxxx --save-dev` … プロジェクトにパッケージをインストールし、情報を「package.json」に書き込む（devDependencies-開発用）
* `npm i xxxxx -D` … 上記のショートカットバージョン
* `npm -v` … npmのバージョンを表示
* `npm run` … package.json - scriptに記載した一覧が見れる
* `npm show` … package.jsonを表示
* `npm remove -g xxxxx` … グローバルのパッケージをアンインストール
* `npm remove xxxxx` … プロジェクトのパッケージをアンインストール
