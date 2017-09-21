import chalk from 'chalk'
import config from 'config'
import compress from 'koa-compress'
import Koa from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'
import { graphiqlKoa } from 'graphql-server-koa'
import { graphqlKoa } from 'apollo-server-koa'
import Schema from 'mlb-stat-schema'
import createExecutableSchema from './schema'

const app = new Koa()
const router = new Router()

const db = new Schema(config.get('db.host'))
const port = config.get('port')

app.use(async (ctx, next) => {
  try {
    await db.connect()
    await next()
  } catch (error) {
    console.log(chalk.red(error))
    console.log(chalk.red('Connection error in: ' + config.get('db.host')))
    process.exit()
  }
})

app.use(BodyParser())

const mlbGraph = createExecutableSchema(db)

router.post('/mlb', graphqlKoa({ schema: mlbGraph }))
router.get('/graphiql', graphiqlKoa({ endpointURL: '/mlb' }))

app.use(router.routes()).use(router.allowedMethods())

app.use(compress())

app.listen(port)
