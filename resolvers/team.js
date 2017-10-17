const TeamResolver = {
  Team: {
    players (team, args, context, info) {
      return context.db.Player.findBy({team: team.id, name: args.name})
    },
    stadium (team, args, context, info) {
      return context.db.Stadium.find(team.id)
    }
  }
}

module.exports = TeamResolver
