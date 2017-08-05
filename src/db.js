const mongoose = require('mongoose');

const database = mongoose.connection;

let connect = host => {
  mongoose.Promise = global.Promise;
  return mongoose.connect(host, {
    useMongoClient: true
  });
};

module.exports = {
  connect: connect
};