const Player = `
type Player {
    id: Int!
    firstName: String
    lastName: String
    fullName: String
    dateOfBirth: String
    mlbId: Int
    positions: [Position]
  }
`

module.exports = Player
