var gulp = require("gulp");
var rimraf = require('rimraf');

// 移動（copy ＞ clean） ★これを実行する
gulp.task('move', ['clean'], function() {});

//コピー
gulp.task( 'copy', function() {
    return gulp.src(
        [ './src/*.html', './src/css/**', './src/js/*.js', './src/images/*.*' ],
        { base: 'src' }
    )
    .pipe( gulp.dest( 'public' ) );
} );

// copyに依存するタスク
gulp.task('clean', ['copy'], function (cb) {
  // clean（ファイルコピー完了後に実行される）
  rimraf('./src/**/*.*', cb);
});
