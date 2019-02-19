const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// Model
require('../models/setor')
const Setor = mongoose.model('setores')

// Get setores
router.get('/', (req, res) => {
  Setor.find()
    .then((setores) => {
      res.send({ setores: setores })
    })
    .catch((err) => {
      res.send('Houve um erro ' + err)
    })
})

// Get setor
router.get('/:id', (req, res) => {
  Setor.findOne({ _id: req.params.id })
    .then((setor) => {
      res.send({ setor: setor })
    })
    .catch((err) => {
      res.send('Houve um erro ' + err)
    })
})

// Add setor
router.post('/', (req, res) => {
  var erros = []

  if (!req.body.nome) {
    erros.push({ texto: 'Nome inválido!' })
  }

  if (req.body.nome.length < 2) {
    erros.push({ texto: 'O nome do setor é muito pequeno' })
  }

  if (erros.length > 0) {
    res.send({ erros: erros })
  } else {
    const novoSetor = {
      nome: req.body.nome
    }

    new Setor(novoSetor).save()
      .then(function () {
        res.send('Setor criado com sucesso!')
      })
      .catch(function (erro) {
        res.send('Houve um erro ao salvar o setor, tente novamente.')
        console.log(erro)
      })
  }
})

// Put setor
router.put('/:id', (req, res) => {
  Setor.findOne({ _id: req.params.id })
    .then((setor) => {
      setor.nome = req.body.nome
      setor.save()
        .then(() => {
          res.send('Setor editado com sucesso')
        })
        .catch((erro) => {
          res.send('Houve um erro ao tentar salvar a edição do setor')
          console.log(erro)
        })
    })
    .catch((erro) => {
      res.send('Houve um erro ao editar o setor')
      console.log(erro)
    })
})

// Delete setor
router.delete('/:id', (req, res) => {
  Setor.remove({ _id: req.params.id })
    .then(() => {
      res.send('Setor excluido com sucesso')
    })
    .catch((erro) => {
      res.send('Houve um erro ao excluir o setor')
      console.log(erro)
    })
})

module.exports = router