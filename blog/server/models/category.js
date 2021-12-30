const mongoose = require('mongoose')

const Schema = mongoose.Schema


const schema = new Schema({
  name: { type: String, required: true },
  excerpt: { type: String },
}, {timestamps: true })

module.exports = mongoose.model('Category', schema)