
const express = require('express')
const bodyParser = require('body-parser')

const { connect, disconnect } = require('./utils/database')

const postsRoutes = require('./routes/posts')

const app = express()

app.use(bodyParser.json())

app.use(postsRoutes)

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/disconnect', (req, res) => {
    disconnect(() => {
        res.send('The MongoDB connection was closed')
    })
})


connect((error) => {
    if (error) {
        console.log(error)
    }

    app.listen(3000, () => {
        console.log('It is running')
    })
})

