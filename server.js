const myKoa = require('./application')
const app = new myKoa()

app.use(async ctx => {
	ctx.body = `<h1>hello Koa2 ${ctx.url}</h1>`
})
app.listen(3002, () => {
	console.log('server start on port 3002')
})
