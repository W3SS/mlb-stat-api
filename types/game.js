const Game = `
  type Game {
      id: Int!
      season: Season!
      awayTeam: Team!
      homeTeam: Team!
      awayTeamRuns: Int!
      homeTeamRuns: Int!
      awayTeamHits: Int!
      homeTeamHits: Int!
      awayTeamErrors: Int!
      homeTeamErrors: Int!
    }
  `

module.exports = Game
