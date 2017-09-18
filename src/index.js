const chalk = require('chalk')
const config = require('config')
const compress = require('koa-compress')
const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')
const { graphiqlKoa } = require('graphql-server-koa')
const mlbGraph = require('./schema')
const db = require('./db.js')

const app = new Koa()
const router = new Router()

app.use(async (ctx, next) => {
  try {
    await db.connect(config.get('db.host'))
    await next()
  } catch (error) {
    console.log(chalk.red(error))
    console.log(chalk.red('Connection error in: ' + config.get('db.host')))
    process.exit()
  }
})

app.use(BodyParser())

router.post('/mlb', mlbGraph)
router.get('/graphiql', graphiqlKoa({ endpointURL: '/mlb' }))

app.use(router.routes()).use(router.allowedMethods())

app.use(compress())

app.listen(3000)
