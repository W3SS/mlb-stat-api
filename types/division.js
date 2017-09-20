import TeamType from './team'

const DivisionType = `
  type Division {
      id: Int!
      name: String
      teams(name: String): [Team]
    }
`

export default () => [DivisionType, ...TeamType]
