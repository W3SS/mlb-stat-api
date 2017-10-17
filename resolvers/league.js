const LeagueResolver = {
  League: {
    divisions (league, args, context, info) {
      return context.db.Division.findByLeague({ league: league.id })
    }
  }
}

module.exports = LeagueResolver
