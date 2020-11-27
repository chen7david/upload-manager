const router = require('koa-router')()

router.post('/upload', upload.single('avatar'), async (ctx) => {

})