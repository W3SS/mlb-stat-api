import Team from './team'
import Division from './division'
import League from './league'
import Season from './season'
import Player from './player'
import Stadium from './stadium'

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
export default () => [
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
