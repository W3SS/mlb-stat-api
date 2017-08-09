const { GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull} = require('graphql')
const { graphqlKoa } = require('graphql-server-koa')
const { Player } = require('mlb-stat-schema')
const playerType = require('../types/player')

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      player: {
        type: new GraphQLList(playerType),
        args: {
          mlb_id: {
            name: 'mlb_id',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: (root, {mlb_id}) => {
          let foundPlayers = new Promise((resolve, reject) => {
            Player.find({mlb_id}, (err, players) => {
              err ? reject(err) : resolve(players)
            })
          })
          return foundPlayers
        }
      }
    }
  })
})

module.exports = graphqlKoa({ schema: schema })
