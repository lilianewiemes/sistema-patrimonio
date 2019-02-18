const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  setor: {
    type: Schema.Types.ObjectId,
    ref: 'setores',
    required: true
  }
})

mongoose.model('usuarios', usuarioSchema)
