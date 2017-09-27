import { merge } from 'lodash'
import SeasonResolver from './season'
import LeagueResolver from './league'
import DivisionResolver from './division'
import TeamResolver from './team'

const QueryResolver = {
  Query: {
    seasons (root, args, context, info) {
      return context.db.Season.findByYear(args.year)
    }
  }
}

const MutationResolver = {
  Mutation: {
    async updateDivision (root, args, context, info) {
      let team = await context.db.Team.updateDivision(args.teamId, args.divisionId)

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

export default RootResolvers
