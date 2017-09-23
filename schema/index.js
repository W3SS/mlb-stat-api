import { makeExecutableSchema } from 'graphql-tools'
import RootResolvers from '../resolvers'
import Types from '../types'

const executableSchema = makeExecutableSchema({
  typeDefs: [Types],
  resolvers: RootResolvers
})

export default executableSchema
