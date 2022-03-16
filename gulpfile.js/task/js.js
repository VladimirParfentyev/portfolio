const { src, dest} =require( 'gulp');
const path = require('../config/path.js')

const babel = require('gulp-babel')
const uglify =require('gulp-uglify')
const concat = require('gulp-concat')
const rename = require('gulp-rename')

const js = ()=>{
    return src([ 
        './src/js/main.js',
        './src/js/module/navbar.js',
        './src/js/module/phonemask.js',
        './src/js/module/accordion.js',
        './src/js/module/tabs.js',
        './src/js/module/canvas.js',
        './src/js/module/modals.js',
    ], {sourcemaps:true})
        .pipe(babel())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.js.dest, {sourcemaps:true}))
}

module.exports = js;