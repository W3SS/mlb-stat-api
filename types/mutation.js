const Mutation = `
  type Mutation {
    updateDivision (
      teamId: Int!,
      divisionId: Int!
    ): Team
    addGame (
      id: Int!,
      seasonId: Int!,
      awayTeamId: Int!
      homeTeamId: Int!
      awayTeamRuns: Int!
      homeTeamRuns: Int!
      awayTeamHits: Int!
      homeTeamHits: Int!
      awayTeamErrors: Int!
      homeTeamErrors: Int!
      date: String!
    ): Game
  }
  `

module.exports = Mutation
