const DivisionResolver = {
  Division: {
    teams (division, args, context, info) {
      return context.db.Team.findByDivisionAndName(division.id, args.name)
    }
  }
}

export default DivisionResolver
