const DivisionResolver = {
  Division: {
    teams (division, args, context, info) {
      return context.db.Team.findBy({ division: division.id, name: args.name })
    }
  }
}

module.exports = DivisionResolver
