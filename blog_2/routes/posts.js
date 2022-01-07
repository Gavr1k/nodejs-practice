const express = require('express');

const { getDb } = require('../utils/database');

const router = express.Router();

router.get('/posts', (req, res) => {
    const db = getDb();
//     var user = db.user.findOne({"id" : "001"}, {"friends": 1})
// db.user.find( {"id" : {$in : user.friends }}).sort("age" : 1);

    // const a = db.collection('posts').findOne()
    db
        .collection('posts')
        .find()
        .toArray()
        .then((posts) => {
            res.json(posts)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
})

router.get('/posts/:id', (req, res) => {
    const db = getDb();


    // db.collection('posts').findOne()
    // .then((posts) => {

    //     db.collection('posts').findOne({"_id": {$in: posts.tags}})
    //     .then((posts_) => {
    //         res.json(posts_)
    //     })
    //     .catch((error) => {
    //         res.status(400).json({error: error.message})
    //     })

    // })
    // .catch((error) => {
    //     res.status(400).json({error: error.message})
    // })


    db.collection('posts').findOne({})
        .then((posts) => {
            res.json(posts)
        })
        .catch((error) => {
            res.status(400).json({error: error.message})
        })

    
})

module.exports = router
