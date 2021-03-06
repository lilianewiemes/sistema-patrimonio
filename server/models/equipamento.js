const mongoose = require('mongoose')
const Schema = mongoose.Schema

const equipamentoSchema = new Schema({
  numero: {
    type: Number,
    required: true
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios',
    required: true
  },
  setor: {
    type: Schema.Types.ObjectId,
    ref: 'setores',
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  }
})

mongoose.model('equipamentos', equipamentoSchema)
