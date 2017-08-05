let mongoose = require('mongoose');

const photoRepository = 'http://mlb.mlb.com/mlb/images/players/head_shot/';

let PlayerSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
      default: mongoose.Types.ObjectId
    },
    mlb_id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    date_of_birth: {
      type: Date
    }
  },
  { collection: 'Player' }
);

PlayerSchema.methods.photo = function() {
  return photoRepository + this.mlb_id + '.jpg';
};

let Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;