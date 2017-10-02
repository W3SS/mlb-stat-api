const SeasonResolver = {
  Season: {
    leagues (season, args, context, info) {
      return context.db.League.findBySeasonAndName(season.id, args.name)
    }
  }
}

module.exports = SeasonResolver
