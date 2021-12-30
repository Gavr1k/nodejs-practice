const express = require('express')
const PostModel = require('../models/post');

const router = express.Router()


//get all posts
router.get('/posts', (req,res) => {
  PostModel.find((error, posts) => {
    if(error) {
      return res.status(400).json({ error: error.message })
    }
    res.json(posts)
  })
})

//create posts

router.post('/posts', (req,res) => {
  const post = new PostModel(req.body)
  post
    .save()
    .then((data) => {
      console.log(data)
      res.json(post)
    })
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
})

module.exports = router