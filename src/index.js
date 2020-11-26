const Koa = require('koa')
const app = new Koa() 
const cors = require('kcors')
const { server } = require('config')
const multer = require('@koa/multer')
const upload = multer()
const url = require('url')

const router = require('koa-router')

/* MIDDLEWARE */
app.use(cors())

app.listen(server.port, () => {
    console.log(`running at ${url.format(server)}`)
})