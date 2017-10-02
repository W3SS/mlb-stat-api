const PlayerResolver = {
  Player: {
    positions (player, args, context, info) {
      return context.db.Position.findByPlayer(player.id)
    }
  }
}

module.exports = PlayerResolver
