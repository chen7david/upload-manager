const router = require('koa-router')()
const { upload } = require('./../middleware/multer')
const { md5, dd } = require('koatools')

router.post('/image', upload.fields([{name: 'avatar', maxCount:1}]), async (ctx) => {
    console.log('ctx.request.files', ctx.request.files);
    console.log('ctx.files', ctx.files);
    console.log('ctx.request.body', ctx.request.body);
    ctx.body = 'done'
})


module.exports = router