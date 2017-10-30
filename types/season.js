const Season = `
  type Season {
      id: Int!
      name: String
      year: String
      leagues(name: String): [League]
      teams(name: String): [Team]
    }
`

module.exports = Season
