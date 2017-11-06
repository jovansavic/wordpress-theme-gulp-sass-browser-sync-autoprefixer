var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync'),
	autoprefixer 	= require('gulp-autoprefixer');

gulp.task('default', ['server', 'watch', 'sass-compile']);

// Gulp browsersynch
gulp.task('server', function(){
	browserSync.init({
		proxy: "localhost:8888/blog.jovansavic" // Change to your locahost domain -localhost/yourprojectfolder-
	});
});

// Autoprefixer 
gulp.task('autoprefix', function() {
	return gulp.src('assets/css/main.css')
	.pipe(autoprefixer({
		browsers: ['last 12 versions']
	}))
	.pipe(gulp.dest('assets/css'));
});

// Compile sass files
gulp.task('sass-compile', function(){
	gulp.src('assets/sass/*.sass')
	.pipe(sass({
		outputStyle: 'compressed'
	}))
	.on('error', console.error.bind(console))
	.pipe(gulp.dest('assets/css/'));
});

// Watch .js, .php, .sass
gulp.task('watch', function () {
	gulp.watch('assets/js/*.js', [browserSync.reload]);
	gulp.watch('assets/sass/**/*.sass', ['sass-compile', browserSync.reload]);
	gulp.watch('**/*.php', [browserSync.reload]);
});
