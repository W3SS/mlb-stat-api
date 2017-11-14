const QueryResolver = {
  Query: {
    async seasons (root, args, context, info) {
      return context.db.Season.findBy(args)
    }
  }
}

module.exports = QueryResolver
