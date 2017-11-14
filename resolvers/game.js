const GameResolver = {
  Game: {
    awayTeam (game, args, context, info) {
      return context.db.Team.find(game.awayTeamId)
    },
    homeTeam (game, args, context, info) {
      return context.db.Team.find(game.homeTeamId)
    }
  }
}

module.exports = GameResolver
