const Query = `
  type Query {
    seasons(year: Int): [Season]
  }
  `

module.exports = Query
