
var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');

gulp.task('default',function(){
    console.log('echo material design colors...');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());

});

gulp.task('build',function(){
    gulp.src('./md-colors.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});
