const SeasonResolver = {
  Season: {
    leagues (season, args, context, info) {
      return context.db.League.findBy({ season: season.id, name: args.name })
    }
  }
}

module.exports = SeasonResolver
