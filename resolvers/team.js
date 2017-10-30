const TeamResolver = {
  Team: {
    players (team, args, context, info) {
      return context.db.Player.findBy({ team: team.id, ...args })
    },
    stadium (team, args, context, info) {
      return context.db.Stadium.find(team.stadium_id)
    }
  }
}

module.exports = TeamResolver
