const Division = `
  type Division {
      id: Int!
      name: String
      teams(name: String): [Team]
    }
`

module.exports = Division
