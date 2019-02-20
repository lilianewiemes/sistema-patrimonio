const express = require('express') 
const router = express.Router()
const mongoose = require('mongoose')

// Model
require('../models/usuario')
const Usuario = mongoose.model('usuarios')

// Get usuarios
router.get('/', (req, res) => {
  Usuario.find()
    .then((usuarios) => {
      res.send({ usuarios: usuarios })
    })
    .catch((err) => {
      res.send('Houve um erro ao buscar os usuários')
      console.log(err)
    })
})

// Get usuario
router.get('/:id', (req, res) => {
  Usuario.findOne({ _id: req.params.id })
    .then((usuario) => {
      res.send({ usuario: usuario })
    })
    .catch((err) => {
      res.send('Houve um erro ao buscar o usuário')
      console.log(err)
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
    res.send({ erros: erros })
  } else {
    const novoUsuario = {
      nome: req.body.nome,
      setor: req.body.setor
    }

    new Usuario(novoUsuario).save()
      .then(function () {
        res.send('Usuario criado com sucesso!')
      })
      .catch(function (erro) {
        res.send('Houve um erro ao salvar o usuario, tente novamente.')
        console.log(erro)
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
          res.render('Usuario editado com sucesso')
        })
        .catch((erro) => {
          res.send('Houve um erro ao tentar salvar a edição do usuário')
          console.log(erro)
        })
    })
    .catch((erro) => {
      res.send('Houve um erro ao tentar salvar a edição do usuário')
      console.log(erro)
    })
})

// Delete usuario
router.delete('/:id', (req, res) => {
  Usuario.remove({ _id: req.params.id })
    .then(() => {
      res.send('Usuario excluido com sucesso')
    })
    .catch((erro) => {
      res.send('Houve um erro ao excluir o usuário')
      console.log(erro)
    })
})

module.exports = router