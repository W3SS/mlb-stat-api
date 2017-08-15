const { Season } = require('mlb-stat-schema')

const findByYear = (year) => {
  if (year) {
    return Season.find({year})
      .populate({
        path: 'leagues',
        populate: {
          path: 'divisions',
          model: 'Division'
        }
      })
  }

  return Season.find({})
    .populate({
      path: 'leagues',
      populate: {
        path: 'divisions',
        model: 'Division'
      }
    })
}

module.exports = {
  findByYear
}
