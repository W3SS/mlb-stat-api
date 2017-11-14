const Season = `
  type Season {
      id: Int!
      name: String
      year: String
      leagues(name: String): [League]
      teams(name: String): [Team]
      games(date: String): [Game]
    }
`

module.exports = Season
