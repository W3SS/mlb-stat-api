import League from './league'

const Season = `
  type Season {
      id: Int!
      name: String
      year: String,
      leagues: [League]
    }
`

export default () => [Season, League]
