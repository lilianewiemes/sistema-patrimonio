const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// Model
require('../models/setor')
const Setor = mongoose.model('setores')

// Get setor
router.get('/', (req, res) => {
  Setor.find()
    .then((setores) => {
      res.send({ setores: setores })
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
    res.send('/', { erros: erros })
  } else {
    const novoSetor = {
      nome: req.body.nome
    }

    new Setor(novoSetor).save()
      .then(function () {
        console.log('Setor criado com sucesso!')
        res.redirect('/lista')
      })
      .catch(function (erro) {
        console.log('Houve um erro ao salvar o setor, tente novamente.' + erro)
        res.redirect('/lista')
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
          console.log('Setor editado com sucesso')
        })
        .catch((erro) => {
          console.log('Houve um erro interno ao tentar salvar a edição do setor')
        })
    })
    .catch((erro) => {
      console.log('Houve um erro ao editar o setor' + erro)
    })
})

// Delete setor
router.delete('/:id', (req, res) => {
  Setor.remove({ _id: req.params.id })
    .then(() => {
      console.log('Setor excluido com sucesso')
    })
    .catch((erro) => {
      console.log('Houve um erro ao excluir o setor' + erro)
    })
})

module.exports = router