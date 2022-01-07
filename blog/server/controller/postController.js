const { json } = require('body-parser')
const postModel = require('../models/post')

module.exports = class PostController {

  static create(req,res) {
    const post = new postModel(req.body)
    post.save()
      .then((post) => {
        res.json(post)
      })
      .catch((error) => {
        res.status(400).json({error: error.message})
      })
  }

  static find(req,res) {
    const posts = postModel.find()
    .populate('authors')
    .populate('categories')
    .populate('tags')
      .then((posts) => {
        res.render('Home', {posts:posts})
      })
      .catch((error) => {
        res.status(400).json({error: error.message})
      })

  }

  static findOne(req, res) {
    const id = req.params.id
    const post = postModel.findById(id)
    .populate('authors')
    .populate('categories')
    .populate('tags')
    .then((post) => {
      
      res.render('PostPage', {post: post})
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }

  static update(req, res) {
    const id = req.params.id
    const post = postModel.findByIdAndUpdate(id, req.body)
    .then((post) => {
      res.json(post)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }

  static delete(req,res) {
    const id = req.params.id
    const post = postModel.findByIdAndDelete(id)
    .then((post) => {
      res.json(post)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }
}