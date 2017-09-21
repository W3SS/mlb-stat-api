const Season = `
  type Season {
      id: Int!
      name: String
      year: String,
      leagues(name: String): [League]
    }
`

export default Season
