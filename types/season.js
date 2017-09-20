import LeagueType from './league'

const SeasonType = `
  type Season {
      id: Int!
      name: String
      year: String,
      leagues: [League]
    }
`

export default () => [SeasonType, LeagueType]
