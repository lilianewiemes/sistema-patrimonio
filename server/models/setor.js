const mongoose = require('mongoose')
const Schema = mongoose.Schema

const setorSchema = new Schema({
  nome: {
    type: String,
    required: true
  }
})

mongoose.model('setores', setorSchema)
