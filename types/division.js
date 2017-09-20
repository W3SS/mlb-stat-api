import TeamType from './team'

const DivisionType = `
  type Division {
      id: Int!
      name: String
      teams: [Team]
    }
`

export default () => [DivisionType, TeamType]
