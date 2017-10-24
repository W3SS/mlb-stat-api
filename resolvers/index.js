const { merge } = require('lodash')
const { createError } = require('apollo-errors')

const BaseResolver = require('./base')
const SeasonResolver = require('./season')
const LeagueResolver = require('./league')
const DivisionResolver = require('./division')
const TeamResolver = require('./team')

const DataError = createError('DataError', {
  message: 'Error with the data server'
})

const updateDivision = BaseResolver.createResolver(async (root, args, context, info) => {
  try {
    let team = await context.db.Team.updateDivision(args.teamId, args.divisionId)

    return team[0]
  } catch (error) {
    throw DataError
  }
})

const QueryResolver = {
  Query: {
    seasons (root, args, context, info) {
      return context.db.Season.findByYear(args.year)
    }
  }
}

const MutationResolver = {
  Mutation: {
    updateDivision
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
