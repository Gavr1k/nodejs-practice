const { json } = require('body-parser')
const tagModel = require('../models/tag')

module.exports = class TagController {

  static create(req,res) {
    const tag = new tagModel(req.body)
    tag.save()
      .then((tag) => {
        res.json(tag)
      })
      .catch((error) => {
        res.status(400).json({error: error.message})
      })
  }

  static find(req,res) {
    const tags = tagModel.find()
      .then((tags) => {
        res.json(tags)
      })
      .catch((error) => {
        res.status(400).json({error: error.message})
      })

  }

  static findOne(req, res) {
    const id = req.params.id
    const tags = tagModel.findById(id)
    .then((tags) => {
      res.json(tags)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }

  static update(req, res) {
    const id = req.params.id
    const tags = tagModel.findByIdAndUpdate(id, req.body)
    .then((tags) => {
      res.json(tags)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }

  static delete(req,res) {
    const id = req.params.id
    const tags = tagModel.findByIdAndDelete(id)
    .then((tags) => {
      res.json(tags)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }
}