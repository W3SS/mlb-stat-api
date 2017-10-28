const SeasonResolver = {
  Season: {
    leagues (season, args, context, info) {
      return context.db.League.findBy({ season: season.id, ...args })
    }
  }
}

module.exports = SeasonResolver
