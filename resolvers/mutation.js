const pubsub = require('./pubsub')

const MutationResolver = {
  Mutation: {
    async updateDivision (root, args, context, info) {
      const team = await context.db.Team.updateDivision(args)

      return team[0]
    },
    async saveGame (root, args, context, info) {
      const game = await context.db.Game.save(args)

      pubsub.publish('gameUpdate', game)

      return game
    }
  }
}

module.exports = MutationResolver
