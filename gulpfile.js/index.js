const {watch, series, parallel} =require( 'gulp');
const browserSync = require('browser-sync').create()
const path = require('./config/path')
//задачи
const clearFolder = require('./task/clearFolder')
const html = require('./task/html')
// const css = require('./task/css')
const scss = require('./task/scss')
const js = require('./task/js')
const img = require('./task/img')
const fonts = require('./task/fonts')

const server = ()=>{
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

const wathcer = ()=>{
    watch(path.html.watch, html).on('all', browserSync.reload),
    watch(path.scss.watch, scss).on('all', browserSync.reload),
    watch(path.js.watch, js).on('all', browserSync.reload),
    watch(path.img.watch, img).on('all', browserSync.reload),
    watch(path.fonts.watch, fonts).on('all', browserSync.reload)
}

exports.build= series(
    clearFolder,
    parallel(html, scss, js, img, fonts)
);

exports.dev= series(
    clearFolder,
    parallel(html, scss, js, img, fonts),
    parallel(wathcer, server)
);

