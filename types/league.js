import Division from './division'

const League = `
  type League {
      id: Int!
      name: String
      divisions: [Division]
    }
`

export default () => [League, Division]
