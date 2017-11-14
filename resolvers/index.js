const { merge } = require('lodash')

const SeasonResolver = require('./season')
const LeagueResolver = require('./league')
const DivisionResolver = require('./division')
const TeamResolver = require('./team')
const PlayerResolver = require('./player')
const GameResolver = require('./game')
const QueryResolver = require('./query')
const MutationResolver = require('./mutation')

const RootResolvers = merge(
  QueryResolver,
  MutationResolver,
  SeasonResolver,
  LeagueResolver,
  DivisionResolver,
  TeamResolver,
  PlayerResolver,
  GameResolver
)

module.exports = RootResolvers
