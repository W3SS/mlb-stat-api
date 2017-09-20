import SeasonResolver from './season'
import LeagueResolver from './league'
import DivisionResolver from './division'

const QueryResolver = {
  Query: {
    seasons (root, args, context, info) {
      return context.db.Team.findByYear(args.year)
    }
  }
}

export default {
  QueryResolver,
  SeasonResolver,
  LeagueResolver,
  DivisionResolver
}
