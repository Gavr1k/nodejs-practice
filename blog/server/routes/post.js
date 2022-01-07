const express = require('express')
const postController = require('../controller/postController')
const router = express.Router()

//get all tag
router.get('/posts', postController.find)

//create tag
router.post('/posts',postController.create)

//get single tag
router.get('/posts/:id', postController.findOne)

// //update tag
router.patch('/posts/:id', postController.update)

// //delete tag
router.delete('/posts/:id', postController.delete)

module.exports = router