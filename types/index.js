import Team from './team'
import Division from './division'
import League from './league'
import Season from './season'

const Query = `
  type Query {
    seasons(year: Int): [Season]
  }
  `
const SchemaDefinition = `
  schema {
    query: Query
  }
`
export default () => [Team, Division, League, Season, Query, SchemaDefinition]
