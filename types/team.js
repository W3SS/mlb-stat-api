const Team = `
  type Team {
      id: Int!
      name: String
      shortname: String
      stadium: Stadium
      players(full_name: String): [Player]
    }
`

module.exports = Team
