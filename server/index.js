const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./config/db')

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

app.use('/api/usuario', usuario)
app.use('/api/setor', setor)
app.use('/api/equipamento', equipamento)

// Public
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'))

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

// Conexao com o banco
mongoose.connect(db.mongoURI)
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