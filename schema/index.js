import { makeExecutableSchema } from 'graphql-tools'
import { SeasonType, LeagueType, DivisionType, TeamType } from './types'
import { SeasonResolver, LeagueResolver, DivisionResolver, TeamResolver } from './resolvers'

const schema = [SeasonType, LeagueType, DivisionType, TeamType]
const resolvers = [SeasonResolver, LeagueResolver, DivisionResolver, TeamResolver]

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
})

export default executableSchema
