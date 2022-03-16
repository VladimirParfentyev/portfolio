const { src, dest} =require( 'gulp');
const path = require('../config/path.js')

const fileIclude = require('gulp-file-include')
const htmlMin = require('gulp-htmlmin')
const webpHtml = require('gulp-webp-html')

const html = ()=>{
    return src([path.html.src])
        .pipe(fileIclude()) //ищем вложения и объединяем
        .pipe(webpHtml()) //создаем блок picture  с webp и jpg
        .pipe(htmlMin({
            collapseWhitespace:true //минифицируем
        }))
        .pipe(dest(path.html.dest)) //закидываем в папку
}

module.exports = html;