import { merge } from 'lodash'
import { makeExecutableSchema } from 'graphql-tools'
import { SeasonResolver, LeagueResolver, DivisionResolver } from '../resolvers'
import Types from '../types'

const resolvers = merge(SeasonResolver, LeagueResolver, DivisionResolver)

const createExecutableSchema = db => {
  const context = {
    db
  }

  const executableSchema = makeExecutableSchema({
    typeDefs: [Types],
    resolvers,
    context
  })

  return executableSchema
}

export default createExecutableSchema
