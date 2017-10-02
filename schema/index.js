const { makeExecutableSchema } = require('graphql-tools')
const RootResolvers = require('../resolvers')
const Types = require('../types')

const executableSchema = makeExecutableSchema({
  typeDefs: [Types],
  resolvers: RootResolvers
})

module.exports = executableSchema
