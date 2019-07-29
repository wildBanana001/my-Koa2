/**
 * koa2 洋葱圈模型 异步 中间件 测试
 */
async function fn1(next) {
  console.log('fn1')
  await next()
  console.log('end fn1')
}

async function fn2(next) {
  console.log('fn2')
  await delay()
  await next()
  console.log('end fn2')
}

async function fn3(next) {
  console.log('fn3')
}

function delay() {
  return new Promise((reslove, reject) => {
    setTimeout(() => reslove(), 200)
  }) 
}

function compose (middlewares) {
  return () => {
    // 先执行第一个函数
    return dispatch(0)
    function dispatch(i) {
      let fn = middlewares[i]
      if (!fn) {
        return Promise.reslove()
      }
      return Promise.resolve(fn(function next() {
        return dispatch(i+1)
      }))
    }
  }
}

const middlewares = [fn1, fn2, fn3]
const finalFn = compose(middlewares)
finalFn()
