const express = require('express');
const bodyParser = require('body-parser');
const mogoose = require('mongoose')

const PostRoutes = require('./routes/post')

const url = 'mongodb+srv://root:123@cluster0.ugu9q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(bodyParser.json())

app.use(PostRoutes)

app.get('/', (req,res) => {
  res.send('Hello')
})

mogoose.connect(url, (error) => {
  if(error) {
    console.log("Connection error!")
    return;
  }
  console.log('It is Connected')
  app.listen(3000, () => {
    console.log('it is working')
  });
})

