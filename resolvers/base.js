const { createResolver } = require('apollo-resolvers')
const { createError, isInstance } = require('apollo-errors')

const UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred!  Please try again later'
})

const baseResolver = createResolver(
  null,
  (root, args, context, error) => (isInstance(error) ? error : new UnknownError())
)

module.exports = baseResolver
