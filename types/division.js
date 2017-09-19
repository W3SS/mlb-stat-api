import Team from './team'

const Division = `
  type Division {
      id: Int!
      name: String
      teams: [Team]
    }
`

export default () => [Division, Team]
