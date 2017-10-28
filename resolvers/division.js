const DivisionResolver = {
  Division: {
    teams (division, args, context, info) {
      return context.db.Team.findBy({ division: division.id, ...args })
    }
  }
}

module.exports = DivisionResolver
