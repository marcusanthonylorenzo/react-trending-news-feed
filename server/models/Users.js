const mongoose = require('mongoose');


//create tables and rows here
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  }
})

//create model, arg1 = table in db, arg2 = instance above
const UserModel = mongoose.model('users', UserSchema);
//export access to client-side
module.exports = UserModel;