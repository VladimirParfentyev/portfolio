const { src, dest, watch, series, parallel} =require( 'gulp');
const path = require('../config/path.js')

const autoprefixer = require('gulp-autoprefixer')
const cssMin = require('gulp-csso')
const rename = require('gulp-rename')
const shortHand = require('gulp-shorthand')
const sass = require('gulp-sass')(require('sass'))
const mediaQueries= require('gulp-group-css-media-queries')
const sassGlobe = require('gulp-sass-glob')
const webpCSS= require('gulp-webp-css')

const scss = ()=>{
    return src([path.scss.src], {sourcemaps:true})
        .pipe(sassGlobe()) // собираем в один файл
        .pipe(sass()) // конвертируем sass в css
        .pipe(webpCSS())  //преобразуем фоновые изоражения в webp
        .pipe(autoprefixer())//добавялем префиксы
        .pipe(shortHand())//сокращаем записи
        .pipe(mediaQueries())// объединяем медиа запросы
        .pipe(dest(path.scss.dest, {sourcemaps:true})) //закидываем в папку
        .pipe(rename({suffix:'.min'}))//переименовываем файл
        .pipe(cssMin())// минифицируем
        .pipe(dest(path.scss.dest, {sourcemaps:true}))//закидываем в папку
}
module.exports = scss;