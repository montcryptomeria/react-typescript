'use strict';

var gulp        = require('gulp'),
    typescript  = require('typescript'),
    ts          = require('gulp-typescript'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    del         = require('del'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    concat      = require('gulp-concat'),
    tsc         = require('gulp-tsc');
    // $ = require('gulp-load-plugins');


var project = ts.createProject('./src/tsconfig.json', {typescript: typescript});

gulp.task('through', function () {
  return gulp
    .src(['./src/**/*.html'])
    .pipe(gulp.dest('build' ) );
});

gulp.task("sass", function() {
    gulp.src("./src/sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./build/common/css"));
});

gulp.task('compile', function () {
  var result = gulp.src('./src/ts/**/*{ts,tsx}')
  // var result = gulp.src('./src/ts/main.ts')
    .pipe(ts(project));

    //return gulp.src('./src/ts/main.ts')
    //    .pipe(tsc({
    //        module: 'amd',
    //        comment: false,
    //        keepTree: false,
    //        out: 'main.js'
    //    }))
    //    .pipe(gulp.dest('.tmp'));
  return result.js.pipe(gulp.dest('.tmp'));
});

gulp.task('bundle', ['through','sass','compile'], function () {
  var b = browserify('.tmp/main.js');
  return b.bundle()
    .pipe(source('./common/js/main.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('library', function () {
  gulp.src([
    'node_modules/react/dist/react-with-addons.js'
  ])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./build/common/webapp/js/'));
})

gulp.task('clean', function (done) {
  del(['.tmp'], done.bind(this));
});

// watch 
gulp.task('watch',function(){
    gulp.watch('./src/**/*{ts,tsx}', ['compile']);
});
 
gulp.task('default', function () {
	runSequence(
		// 'clean',
        'library',
		'bundle',
		//['library', 'jst', 'mainjs', 'deeplinkjs', 'styles:scss'],
		//'uglify',
		//'done'
    'clean'
	);
});