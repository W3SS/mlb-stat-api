import { merge } from 'lodash'
import SeasonResolver from './season'
import LeagueResolver from './league'
import DivisionResolver from './division'

const QueryResolver = {
  Query: {
    seasons (root, args, context, info) {
      return context.db.Season.findByYear(args.year)
    }
  }
}

const RootResolvers = merge(QueryResolver, SeasonResolver, LeagueResolver, DivisionResolver)

export default RootResolvers
