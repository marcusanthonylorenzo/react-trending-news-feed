const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/Users.js');
const ArticlesModel = require('./models/Articles.js');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:epicodus@cluster0.bhljv.mongodb.net/news?retryWrites=true&w=majority");


//no need for delete or update actions at this moment.


//create endpoints for client requests, return model you want to send.
app.get("/getArticles", (req, res) => {
  ArticlesModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
})

app.post("/addArticles", async (req, res) => {

  //create body, instantiate new model to store in db, await saving it
  const articlesInList = req.body
  const newArticlesList = new ArticlesModel(articlesInList);
  await newArticlesList.save();
  console.log(newArticlesList);
  res.json(newArticlesList);

})




//create endpoints for client requests, return model you want to send.
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
})

app.post("/addUser", async (req, res) => {

  //create body, instantiate new model to store in db, await saving it
  const user = req.body
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);

})



app.listen(3002, () => console.log("Server running!"))
