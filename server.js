const myKoa = require('./application')
const app = new myKoa()

app.use((req, res) => {
	res.writeHead(200)
	res.end('hello Koa2')
})
app.listen(3002, () => {
	console.log('server start on port 3002')
})


// const http = require('http')

// const server = http.createServer((req, res) => {
// 	res.writeHead(200)		//响应状态码 
// 	res.end('hello Koa2')
// })

// server.listen(9999, () => {
// 	console.log('server start on port 9999')
// })