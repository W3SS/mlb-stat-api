const SeasonResolver = {
  Season: {
    leagues (season, args, context, info) {
      return context.db.League.findBy({ season: season.id, ...args })
    },
    teams (season, args, context, info) {
      return context.db.Team.findBy({ season: season.id, ...args })
    },
    games (season, args, context, info) {
      return context.db.Game.findBy({ season: season.id, ...args })
    }
  }
}

module.exports = SeasonResolver
