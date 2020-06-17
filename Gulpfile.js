const del = require('del');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

function cleanCss() {
    return del('lib/css');
}

function css() {
    return gulp.src('src/client/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            tailwindcss,
            autoprefixer
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib/'));
}

exports.build = gulp.series(cleanCss, css);
