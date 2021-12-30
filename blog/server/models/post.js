const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  // except: { type: String },
  // categories: { type: String, required: true },
  // tags: { type: String, required: true },
  // author: { type: String, required: true },
  // createdAt: { type: Date },
  // updatedAt: { type: Date },
})

module.exports = mongoose.model('Post', schema)