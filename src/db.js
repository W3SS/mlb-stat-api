const mongoose = require('mongoose')

let connect = host => {
  mongoose.Promise = global.Promise
  return mongoose.connect(host, {
    useMongoClient: true
  })
}

module.exports = {
  connect: connect
}
