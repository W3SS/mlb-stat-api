const Team = require('./team')
const Division = require('./division')
const League = require('./league')
const Season = require('./season')
const Player = require('./player')
const Stadium = require('./stadium')
const Position = require('./position')

const Query = `
  type Query {
    seasons(year: Int): [Season]
  }
  `
const Mutation = `
  type Mutation {
    updateDivision (
      teamId: Int!,
      divisionId: Int!
    ): Team
  }
`

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
  Season,
  Query,
  Mutation,
  SchemaDefinition
]
