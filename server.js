const myKoa = require('./application')
const app = new myKoa()

// app.use(async ctx => {
// 	ctx.body = `<h1>hello Koa2 ${ctx.url}</h1>`
// })

app.listen(3002, () => {
	console.log('server start on port 3002')
})

/**
 * koa2 洋葱圈模型 异步 中间件 测试
 */
app.use(async (ctx, next) => {
  ctx.body = 'fn1'
  await next()
  ctx.body += 'end fn1'
})

app.use(async (ctx, next) => {
  ctx.body += 'fn2'
  await delay()
  await next()
  ctx.body += 'end fn2'
})

app.use(async (ctx, next) => {
  ctx.body += 'fn3'
})

function delay() {
  return new Promise((reslove, reject) => {
    setTimeout(() => reslove(), 200)
  }) 
}
