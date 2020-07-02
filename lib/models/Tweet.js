const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  quote: {
    type: String,
    maxlength: 240,
    required: true,
    
  },
  author: {
    type: String
  }
});

module.exports = mongoose.model('Tweet', schema);


