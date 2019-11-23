import gulp from 'gulp';

// build task
export default function build(done) {
	return gulp.src(['./src/**/*'])
		.pipe(gulp.dest('./dist'));
}
