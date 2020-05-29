const gulp = require('gulp')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')

const scriptsFiles = ['./provider/js/vendor/jquery-3.3.1.min.js', './provider/js/vendor/jquery-ui.min.js', './provider/js/main.js']

const jsDest = './public/common/js/'
const cssDest = './public/common/css/'

/*
gulp.task('engineScripts', function(){
  return gulp.src(scriptsFiles)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
})
*/

gulp.task('compressStylus', function () {
    return gulp.src('./provider/css/main.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest(cssDest))
})

gulp.task('default', () => {  
  //gulp.watch('./provider/js/main.js', gulp.series('engineScripts') )
  gulp.watch('./provider/css/**/*.styl', gulp.series('compressStylus') )
})