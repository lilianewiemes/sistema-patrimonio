const express = require('express') 
const router = express.Router()
const mongoose = require('mongoose')

// Model
require('../models/usuario')
const Usuario = mongoose.model('usuarios')

// Get usuario
router.get('/', (req, res) => {
  Usuario.find()
    .then((usuarios) => {
      res.send({ usuarios: usuarios })
    })
    .catch((err) => {
      res.send('Houve um erro ' + err)
    })
})

// Add usuario
router.post('/', (req, res) => {
  var erros = []

  if (!req.body.nome) {
    erros.push({ texto: 'Nome inválido!' })
  }

  if (!req.body.setor) {
    erros.push({ texto: 'Setor inválido!' })
  }

  if (req.body.nome.length < 2) {
    erros.push({ texto: 'O nome do usuário é muito pequeno' })
  }

  if (erros.length > 0) {
    res.send('/', { erros: erros })
  } else {
    const novoUsuario = {
      nome: req.body.nome,
      setor: req.body.setor
    }

    new Usuario(novoUsuario).save()
      .then(function () {
        console.log('Usuario criado com sucesso!')
        res.redirect('/lista')
      })
      .catch(function (erro) {
        console.log('Houve um erro ao salvar o usuario, tente novamente.' + erro)
        res.redirect('/lista')
      })
  }
})

// Put usuario
router.put('/:id', (req, res) => {
  Usuario.findOne({ _id: req.params.id })
    .then((usuario) => {
      usuario.nome = req.body.nome,
      usuario.setor = req.body.setor

      usuario.save()
        .then(() => {
          console.log('Usuario editado com sucesso')
        })
        .catch((erro) => {
          console.log('Houve um erro interno ao tentar salvar a edição do usuario')
        })
    })
    .catch((erro) => {
      console.log('Houve um erro ao editar o usuario' + erro)
    })
})

// Delete usuario
router.delete('/:id', (req, res) => {
  Usuario.remove({ _id: req.params.id })
    .then(() => {
      console.log('Usuario excluido com sucesso')
    })
    .catch((erro) => {
      console.log('Houve um erro ao excluir o usuario' + erro)
    })
})

module.exports = router