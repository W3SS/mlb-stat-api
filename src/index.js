const chalk = require('chalk')
const config = require('config')
const compress = require('koa-compress')
const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')
const { graphiqlKoa } = require('graphql-server-koa')
const playerGraph = require('./schema/player')
const leagueGraph = require('./schema/league')
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

router.post('/players', playerGraph)
router.post('/leagues', leagueGraph)
router.get('/graphiql', graphiqlKoa({ endpointURL: '/leagues' }))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.use(compress())

app.listen(3000)
