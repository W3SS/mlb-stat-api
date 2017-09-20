const LeagueResolver = {
  League: {
    divisions (league, args, context, info) {
      return context.db.Division.findByLeague(league.id)
    }
  }
}

export default LeagueResolver
