var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var options = {
  jsPaths: ['**/*.js', '!node_modules/**']
};

gulp.task('test', () => {
  gulp.src(options.jsPaths, {read: false})
    .pipe(mocha());
});

gulp.task('lint', () => {
  return gulp.src(options.jsPaths)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
  gulp.watch(options.jsPaths, ['lint', 'test']);
});

gulp.task('default', ['lint', 'test', 'watch']);
