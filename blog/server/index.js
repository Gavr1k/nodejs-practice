const express = require('express');
const bodyParser = require('body-parser');
const mogoose = require('mongoose')
const loggerMiddleware = require('./logger')
const postModel = require('./models/post')

//include routes
const PostRoutes = require('./routes/post')
const tagRouter = require('./routes/tag')
const authorRoutes = require('./routes/author')
const categoryRoutes = require('./routes/category')

// const path = require('path')

const url = 'mongodb+srv://root:123@cluster0.phkak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express();

const path = "/Users/andreihauryk/Desktop/nodejs-practice/blog"

//--------------------------------------

app.set('views', path + '/client/view/');
app.set('view engine', 'ejs')

app.use(express.static(path + '/client/view'));

app.use(bodyParser.json())

//global logger middleware
app.use(loggerMiddleware)

app.use(PostRoutes)
app.use(tagRouter)
app.use(authorRoutes)
app.use(categoryRoutes)

app.get('/', (req,res) => {
  const post = postModel.find()
  res.render('Home',post)
})

mogoose.connect(url, (error) => {
  if(error) {
    console.log("Connection error!")
    return;
  }
  console.log('It is Connected')
  app.listen(3001, () => {
    console.log('it is working')
  });
})


