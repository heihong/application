const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose.connect("mongodb+srv://hong:ZTrN0jB2mNu7fvAb@cluster0.j3pzl.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to Database!");
    })
    .catch(() => {
      console.log("Connetion failed!");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // all domaine
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})


app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json();
})

app.use("/api/posts", (req, res, next) => {
 Post.find()
  .then((documents)=>{
    res.status(200).json({
      posts: documents
    });
  })
})

app.delete("/api/posts/:id", (req, res, next) => {
  console.log("test")
  res.send("Got a DELETE request at /user")
});

module.exports = app;
