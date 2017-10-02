const TeamResolver = {
  Team: {
    players (team, args, context, info) {
      return context.db.Player.findByTeamAndName(team.id, args.name)
    },
    stadium (team, args, context, info) {
      return context.db.Stadium.find(team.id)
    }
  }
}

module.exports = TeamResolver
