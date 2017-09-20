import DivisionType from './division'

const LeagueType = `
  type League {
      id: Int!
      name: String
      divisions: [Division]
    }
`

export default () => [LeagueType, ...DivisionType]
