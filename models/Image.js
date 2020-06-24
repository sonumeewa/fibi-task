const mongoose = require('mongoose');
const { ObjectID } = require('bson');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  type: {
    type: String,
  },
  metaData: {
    size: {
      type: Number,
    },
    extType: {
      type: String,
    },
  },
});
module.exports = User = mongoose.model('User', UserSchema);
