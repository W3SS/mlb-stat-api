const Mutation = `
  type Mutation {
    updateDivision (
      teamId: Int!,
      divisionId: Int!
    ): Team
    saveGame (
      id: Int,
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
      startTime: String!
    ): Game
  }
  `

module.exports = Mutation
