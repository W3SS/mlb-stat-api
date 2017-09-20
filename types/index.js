import SeasonType from './season'

const QueryType = `
  type Query {
    seasons(year: Int): [Season]
  }
  `
export default () => [QueryType, ...SeasonType]
