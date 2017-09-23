import graphql from 'graphql'
import chai from 'chai'

import Season from './season'
const SeasonType = Season.type
const expect = chai.expect

describe('Season', () => {
  it('Should have an id field of type Int', () => {
    expect(SeasonType.getFields()).to.have.property('id')
    expect(SeasonType.getFields().id.type).to.deep.equals(graphql.GraphQLInt)
  })

  it('Should have a name field of type String', () => {
    expect(SeasonType.getFields()).to.have.property('name')
    expect(SeasonType.getFields().name.type).to.deep.equals(graphql.GraphQLString)
  })

  it('Should have a year field of type String', () => {
    expect(SeasonType.getFields()).to.have.property('year')
    expect(SeasonType.getFields().year.type).to.deep.equals(graphql.GraphQLString)
  })
})
