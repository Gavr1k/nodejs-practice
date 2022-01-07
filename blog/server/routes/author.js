const express = require('express')
const authorController = require('../controller/authorController')
const router = express.Router()

//get all tag
router.get('/authors', authorController.find)

//create tag
router.post('/authors', authorController.create)

//get single tag
router.get('/authors/:id', authorController.findOne)

// //update tag
router.patch('/authors/:id', authorController.update)

// //delete tag
router.delete('/authors/:id', authorController.delete)

module.exports = router