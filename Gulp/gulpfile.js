import gulp from 'gulp';
import concat from 'gulp-concat'
import cssmin from 'gulp-cssmin'
import {image} from 'gulp-image';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';

// const gulp = require('gulp')
// const concat = require('gulp-concat')
// const cssmin = require('gulp-cssmin')
// const rename = require('gulp-rename')
// const uglify = require('gulp-uglify')
// const image = require('gulp-image')

function tarefasCSS(cb) {

    return gulp.src('./vendor/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css'))


}


function tarefasJS(){

    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) //libs.min.js
        .pipe(gulp.dest('./dist/js'))
}


function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}


gulp.task('styles', function() {
	return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './vendor/owl/css/owl.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css'
    ])

        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('scripts', function() {
	return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/js/owl.js',
        './vendor/jquery-mask/jquery.mask.js',
        './vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'
    ])

        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) //libs.min.js
        .pipe(gulp.dest('./dist/js'))
});
gulp.task('images', function() {
	return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
});



// module.exports.styles = tarefasCSS
// module.exports.scripts = tarefasJS
// module.exports.images = tarefasImagem