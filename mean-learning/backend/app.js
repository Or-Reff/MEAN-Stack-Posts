// imports
const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post');
const { default: mongoose } = require('mongoose');

const app = express();

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://orMongoAdmin:sGkkSwZgVXMMe3nq@cluster0.aftzbrv.mongodb.net/node-angular")
    .then(() => {
        console.log('Connected to database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    })
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'Post added successfuly!',
            postId: createdPost._id
        });
    })
})

// sGkkSwZgVXMMe3nq
app.get("/api/posts", (req, res, next) => {
    Post.find().then(documents => {
        res.status(200).json({
            message: "Posts fetched succesfully!",
            posts: documents
        });
    })
});


app.delete("/api/posts/:id", (req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
    })
    res.status(200).json({ message: "Post Deleted!" })
});

module.exports = app;