const express = require('express')
const tagController = require('../controller/TagController')
const router = express.Router()

//get all tag
router.get('/tags', tagController.find)

//create tag
router.post('/tags',tagController.create)

//get single tag
router.get('/tags/:id', tagController.findOne)

// //update tag
router.patch('/tags/:id', tagController.update)

// //delete tag
router.delete('/tags/:id', tagController.delete)

module.exports = router