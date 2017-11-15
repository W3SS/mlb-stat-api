const Game = require('./game')
const Team = require('./team')
const Division = require('./division')
const League = require('./league')
const Season = require('./season')
const Player = require('./player')
const Stadium = require('./stadium')
const Position = require('./position')
const Mutation = require('./mutation')
const Query = require('./query')
const Subscription = require('./subscription')

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`
module.exports = () => [
  Position,
  Stadium,
  Player,
  Team,
  Division,
  League,
  Game,
  Season,
  Query,
  Mutation,
  Subscription,
  SchemaDefinition
]
