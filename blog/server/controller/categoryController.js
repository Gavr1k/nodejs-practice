const { json } = require('body-parser')
const categoryModel = require('../models/category')

module.exports = class CategoryController {

  static create(req,res) {
    const category = new categoryModel(req.body)
    category.save()
      .then((category) => {
        res.json(category)
      })
      .catch((error) => {
        res.status(400).json({error: error.message})
      })
  }

  static find(req,res) {
    const category = categoryModel.find()
      .then((category) => {
        res.json(category)
      })
      .catch((error) => {
        res.status(400).json({error: error.message})
      })

  }

  static findOne(req, res) {
    const id = req.params.id
    const category = categoryModel.findById(id)
    .then((category) => {
      res.json(category)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }

  static update(req, res) {
    const id = req.params.id
    const category = categoryModel.findByIdAndUpdate(id, req.body)
    .then((category) => {
      res.json(category)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }

  static delete(req,res) {
    const id = req.params.id
    const category = categoryModel.findByIdAndDelete(id)
    .then((category) => {
      res.json(category)
    })
    .catch((error) => {
      res.status(400).json({error: error.message})
    })
  }
}