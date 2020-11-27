const multer = require('@koa/multer')
const p = require('path')
const fs = require('fs')
const { folder } = require('config')
const { md5, dd } = require('koatools')
const root = path.resolve(__dirname, folder.root)

dd({root})

const destination = (ctx, file, cb) => {
    
    console.log({file, name: 'destination'})
    cb(null, root)
}

const filename = (ctx, file, cb) => {
    const name = md5() + p.extname(file.originalname)
    console.log({file, name: 'filename'})
    cb(null, name)
}

const storage = multer.diskStorage({filename, destination})

const upload = multer({ storage })

module.exports = {
    upload,
    multer
}