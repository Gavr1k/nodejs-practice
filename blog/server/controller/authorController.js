const { json } = require('body-parser')
const authorModel = require('../models/author')

module.exports = class authorController {

  static create(req,res) {
    const author = new authorModel(req.body)
    author.save()
      .then((author) => {
        res.json(author)
      })
      .catch((error) => {
        res.status(400).json({error: error.message})
      })
  }

  static find(req,res) {
    const author = authorModel.find()
      .then((author) => {
        res.json(author)
      })
      .catch((error) => {
        res.status(400).json({error: error.message})
      })

  }

  static findOne(req, res) {
    const id = req.params.id
    const author = authorModel.findById(id)
    .then((author) => {
      res.json(author)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }

  static update(req, res) {
    const id = req.params.id
    const author = authorModel.findByIdAndUpdate(id, req.body)
    .then((author) => {
      res.json(author)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }

  static delete(req,res) {
    const id = req.params.id
    const author = authorModel.findByIdAndDelete(id)
    .then((author) => {
      res.json(author)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }
}