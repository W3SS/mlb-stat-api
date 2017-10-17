const PlayerResolver = {
  Player: {
    positions (player, args, context, info) {
      return context.db.Position.findBy({ player: player.id })
    }
  }
}

module.exports = PlayerResolver
