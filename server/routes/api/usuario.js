const express = require('express') 
const router = express.Router()
const mongoose = require('mongoose')

// Model
require('../../models/usuario')
const Usuario = mongoose.model('usuarios')

// Get usuarios
router.get('/', (req, res) => {
  Usuario.find()
  .exec((err, usuarios) => {
    if (err) {
      res.send({ error_msg: 'Houve um erro ao buscar os usuarios' })
    } else if (usuarios) {
      res.send({ usuarios: usuarios })
    } else {
      res.send({ error_msg: 'Usuários não encontrados' })
    }
  })
})

// Get usuario
router.get('/:id', (req, res) => {
  Usuario.findById({ _id: req.params.id })
  .exec((err, usuario) => {
    if (err) {
      res.send({ error_msg: 'Houve um erro ao buscar o usuário' })
    } else if (usuario) {
      res.send({ usuario: usuario })
    } else {
      res.send({ error_msg: 'Usuário não encontrado' })
    }
  })
})


// Add usuario
router.post('/', (req, res) => {
  Usuario.findOne({ nome: req.body.nome }).exec((err, usuario) => {
    if (err) {
      res.send({ error_msg: 'Houve um erro ao salvar o usuário' })
    } else if (usuario) {
      res.send({ error_msg: 'O usuário já existe' })
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
})

// Put usuario
router.put('/:id', (req, res) => {
  Usuario.findById({ _id: req.params.id })
  .exec((err, usuario) => {
    Usuario.findOne({ nome: req.body.nome })
      .exec((err, usuarioNome) => {
        if (err) {
          res.send({ error_msg: 'Houve um erro ao salvar o usuário' })
        } else if (usuarioNome) {
          res.send({ error_msg: 'O usuário já existe' })
        } else {
          usuario.nome = req.body.nome
          usuario.setor = req.body.setor

          usuario.save((err) => {
            if (err) {
              res.send({ error_msg: 'Houve um erro ao tentar salvar a edição do usuário' })
            } else {
              res.send({ success_msg: 'Usuário editado com sucesso' })
            }
          })
        }
      })
  })
})

// Delete usuario
router.delete('/:id', (req, res) => {
  Usuario.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.send({ error_msg: 'Houve um erro ao excluir o usuário' })
    } else {
      res.send({ success_msg: 'Usuário excluido com sucesso' })
    }
  })
})

module.exports = router