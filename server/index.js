const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// Cors
app.use(cors())

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
const usuario = require('./routes/usuario');
const setor = require('./routes/setor');
const equipamento = require('./routes/equipamento');

app.use('/usuario', usuario)
app.use('/setor', setor)
app.use('/equipamento', equipamento)

// Conexao com o banco
mongoose.connect('mongodb://localhost/teste-patrimonio')
  .then(() => {
    console.log('Conectado ao mongoDB')
  })
  .catch((err) => {
    console.log('Erro ao se conectar ao mongoDb: ' + err)
  })

// Port
const port = process.env.PORT || 8081
app.listen(port)
console.log('Servidor rodando na porta: ' + port)