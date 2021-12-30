const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  except: { type: String },
  categories: { 
    type: [mongoose.Types.ObjectId],
    ref: "Category",
    required: true 
  },
  tags: { 
    type: [mongoose.Types.ObjectId],
    ref: "Tag",
    required: true 
  },
  tags: { 
    type: mongoose.Types.ObjectId,
    ref: "Author",
    required: true 
  },
}, { timestamps: true });

module.exports = mongoose.model('Post', schema)