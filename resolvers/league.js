const LeagueResolver = {
  League: {
    divisions (league, args, context, info) {
      return context.db.Division.findBy({ league: league.id })
    }
  }
}

module.exports = LeagueResolver
