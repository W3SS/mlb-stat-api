const 
    { graphql,
    GraphQLList,
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString }    = require('graphql');
const 
    { graphqlKoa } = require('graphql-server-koa');
const Player = require('./playerSchema');

let playerType = new GraphQLObjectType({
  name: 'player',
  description: 'a player',
  fields: () => ({
    mlb_id: {
      type: (GraphQLInt),
      description: 'The id of the player.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the player.',
    },
    position: {
      type: GraphQLString,
      description: 'The position of the player'
    }
  })
});

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

module.exports = graphqlKoa({ schema: schema})