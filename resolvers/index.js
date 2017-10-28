const { merge } = require('lodash')

const SeasonResolver = require('./season')
const LeagueResolver = require('./league')
const DivisionResolver = require('./division')
const TeamResolver = require('./team')

const QueryResolver = {
  Query: {
    async seasons (root, args, context, info) {
      return context.db.Season.findBy(args)
    }
  }
}

const MutationResolver = {
  Mutation: {
    async updateDivision (root, args, context, info) {
      let team = await context.db.Team.updateDivision(args)

      return team[0]
    }
  }
}

const RootResolvers = merge(
  QueryResolver,
  MutationResolver,
  SeasonResolver,
  LeagueResolver,
  DivisionResolver,
  TeamResolver
)

module.exports = RootResolvers
