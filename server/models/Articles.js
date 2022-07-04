const mongoose = require('mongoose');


//create tables and rows here
const ArticlesSchema = new mongoose.Schema({
  articlesList:  {
      type: mongoose.Schema.Types.Array,
      required: true
    },
  })

//create model, arg1 = table in db, arg2 = instance above
const ArticlesModel = mongoose.model('articles', ArticlesSchema);
//export access to client-side
module.exports = ArticlesModel;