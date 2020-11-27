const Koa = require('koa')
const app = new Koa() 
const cors = require('kcors')
const { server } = require('config')
const router = require('./router')
const url = require('url')

/* MIDDLEWARE */
app.use(cors())




app.listen(server.port, () => {
    console.log(`running at ${url.format(server)}`)
})