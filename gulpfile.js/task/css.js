const { src, dest} =require( 'gulp');
const path = require('../config/path.js')

const concat = require('gulp-concat')
const cssImport = require('gulp-cssimport')
const autoprefixer = require('gulp-autoprefixer')
const cssMin = require('gulp-csso')
const rename = require('gulp-rename')
const shortHand = require('gulp-shorthand')
const mediaQueries = require('gulp-group-css-media-queries')
const webpCSS= require('gulp-webp-css')

const css = ()=>{
    return src([path.css.src], {sourcemaps:true})
        .pipe(concat("main.css")) //объединяем в один файл
        .pipe(cssImport()) 
        .pipe(webpCSS()) //преобразуем фоновые изоражения в webp
        .pipe(autoprefixer()) //добавялем префиксы
        .pipe(shortHand()) //сокращаем записи
        .pipe(mediaQueries()) // объединяем медиа запросы
        .pipe(dest(path.css.dest, {sourcemaps:true})) //закидываем в папку
        .pipe(rename({suffix:'.min'})) //переименовываем файл
        .pipe(cssMin()) // минифицируем
        .pipe(dest(path.css.dest, {sourcemaps:true}))//закидываем в папку
}

module.exports = css;