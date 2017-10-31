const Season = `
  type Season {
      id: Int!
      name: String
      year: String
      leagues(name: String): [League]
      teams(name: String): [Team]
      games(awayTeamName: String, homeTeamName: String): [Game]
    }
`

module.exports = Season
