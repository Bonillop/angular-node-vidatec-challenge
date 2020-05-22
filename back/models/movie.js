const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  titulo: {type: String, unique: true},
  genero: {type: [String]},
  año: {type: String},
  director: {type: String},
  actores: {type: [String]}
})

module.exports = mongoose.model('movie', schema);