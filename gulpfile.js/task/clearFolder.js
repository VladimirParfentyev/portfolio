const del = require('del')
const path = require('../config/path.js')

const clearFolder = ()=>{
    return del(path.root)
}

module.exports = clearFolder;
