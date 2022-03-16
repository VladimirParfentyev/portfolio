const pathSrc = './src'
const pathDest = './public'

module.exports = {
    root: pathDest,

    html:{
        src:pathSrc+'/html/*.html',
        watch:pathSrc + '/html/**/*.html',
        dest: pathDest
    },
    css:{
        src:pathSrc+'/css/*.css',
        watch:pathSrc + '/css/**/*.css',
        dest: pathDest + '/css'
    },
    scss:{
        src:pathSrc+'/scss/*.{scss,sass}',
        watch:pathSrc + '/scss/**/*.{scss,sass}',
        dest: pathDest + '/css'
    },
    js:{
        src:pathSrc+'/js/*.js',
        watch:pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },
    img:{
        src:pathSrc+'/img/*.{jpg,gif,png,svg}',
        watch:pathSrc + '/img/**/*.{jpg,gif,png,svg}',
        dest: pathDest + '/img'
    },
    fonts:{
        src:pathSrc+'/fonts/*.{ttf, otf, eot, otc, ttc, woff, woff2, svg}',
        watch:pathSrc + '/fonts/**/*.{ttf, otf, eot, otc, ttc, woff, woff2, svg}',
        dest: pathDest + '/fonts'
    },
}