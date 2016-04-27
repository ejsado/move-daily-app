var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');

gulp.task('default', function() {
	console.log(
		"\n" +
		" You're definitely gonna forget how to use this tool, \n" +
		" so here are the gulp tasks you made: \n\n" +
		" buildSass : compiles and prefixes all .scss files in 'public/assets/styles/' \n" +
		" watchSass : watches 'public/assets/styles/' for changes in any .scss file and runs 'buildSass' \n"
	);
});

gulp.task('buildSass', function() {
	return gulp.src('./public/assets/styles/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefix())
		.pipe(gulp.dest('./public/assets/styles'));
});

gulp.task('watchSass', function() {
	gulp.watch('./public/assets/styles/*.scss', ['buildSass']);
});




























