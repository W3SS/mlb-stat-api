import { merge } from 'lodash'
import { makeExecutableSchema } from 'graphql-tools'
import Types from '../types'
import { SeasonResolver, LeagueResolver, DivisionResolver } from '../resolvers'

const resolvers = merge(SeasonResolver, LeagueResolver, DivisionResolver)

const executableSchema = makeExecutableSchema({
  typeDefs: [...Types],
  resolvers
})

export default executableSchema
