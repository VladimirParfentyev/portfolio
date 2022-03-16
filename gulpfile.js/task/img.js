const { src, dest,} =require( 'gulp');
const path = require('../config/path.js')

const imgMin = require('gulp-imagemin')
const newer = require('gulp-newer')
const webp = require('gulp-webp')

const img = ()=>{
    return src([path.img.src]) //взяли из папки
        .pipe(newer(path.img.dest)) //отследили новые файлы
        .pipe(webp()) //преобразовали в новый формат
        .pipe(dest(path.img.dest))//закинули в папку изоражения в новом формате
        .pipe(src([path.img.src]))//взяли из папки
        .pipe(newer(path.img.dest)) //отследили новые файлы
        .pipe(imgMin()) //сжали
        .pipe(dest(path.img.dest)) //закинули в папку
}

module.exports = img;