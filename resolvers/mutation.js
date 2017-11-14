const MutationResolver = {
  Mutation: {
    async updateDivision (root, args, context, info) {
      let team = await context.db.Team.updateDivision(args)

      return team[0]
    },
    async addGame (root, args, context, info) {
      let team = await context.db.Game.updateDivision(args)

      return team[0]
    }
  }
}

module.exports = MutationResolver
