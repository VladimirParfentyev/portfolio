const { src, dest,} =require( 'gulp');
const path = require('../config/path.js')

const newer = require('gulp-newer')
const fonter = require('gulp-fonter')
const ttf2woff2 = require('gulp-ttf2woff2')

const fonts = ()=>{
    return src([path.fonts.src]) //взяли из папки
        .pipe(newer(path.fonts.dest)) //отследили новые файлы
        .pipe(fonter({
            formats:['ttf', 'woff', 'eot', 'svg']
        }))                            //конвертируем шрифты(кроме woff2)
        .pipe(dest(path.fonts.dest)) //закинули в папку
        .pipe(ttf2woff2()) //конвертируем шрифты в woff2
        .pipe(dest(path.fonts.dest)) //закинули в папку
}

module.exports = fonts;