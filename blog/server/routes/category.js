const express = require('express')
const categoryController = require('../controller/categoryController')
const router = express.Router()

//get all tag
router.get('/categories', categoryController.find)

//create tag
router.post('/categories',categoryController.create)

//get single tag
router.get('/categories/:id', categoryController.findOne)

// //update tag
router.patch('/categories/:id', categoryController.update)

// //delete tag
router.delete('/categories/:id', categoryController.delete)

module.exports = router