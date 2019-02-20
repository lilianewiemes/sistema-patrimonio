const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

// Model
require('../models/setor')
const Setor = mongoose.model('setores')

// Get setores
router.get('/', (req, res) => {
  Setor.find()
    .exec((err, setores) => {
      if (err) {
        res.send('Houve um erro ao buscar os setores')
      } else if (setores) {
        res.send({ setores: setores })
      } else {
        res.send('Setores não encontrados')
      }
    })
})

// Get setor
router.get('/:id', (req, res) => {
  Setor.findById({ _id: req.params.id })
  .exec((err, setor) => {
    if (err) {
      res.send('Houve um erro ao buscar o setor')
    } else if (setor) {
      res.send({ setor: setor })
    } else {
      res.send('Setor não encontrado')
    }
  })
})

// Add setor
router.post('/', (req, res) => {
  Setor.findOne({ nome: req.body.nome }).exec((err, setor) => {
    if (err) {
      res.send('Houve um erro ao salvar o setor')
    } else if (setor) {
      res.send('O setor já existe')
    } else {
      const novoSetor = {
        nome: req.body.nome
      }
  
      new Setor(novoSetor).save((err) => {
        if (err) {
          res.send('Houve um erro ao salvar o setor')
        } else {
          res.send('Setor criado com sucesso')
        }
      })
    }
  })
})

// Put setor
router.put('/:id', (req, res) => {
  Setor.findById({ _id: req.params.id })
    .exec((err, setor) => {
      Setor.findOne({ nome: req.body.nome })
        .exec((err, setorNome) => {
          if (err) {
            res.send('Houve um erro ao salvar o setor')
          } else if (setorNome) {
            res.send('O setor já existe')
          } else {
            setor.nome = req.body.nome
            setor.save((err) => {
              if (err) {
                res.send('Houve um erro ao tentar salvar a edição do setor')
              } else {
                res.send('Setor editado com sucesso')
              }
            })
          }
        })
    })
})

// Delete setor
router.delete('/:id', (req, res) => {
  Setor.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.send('Houve um erro ao excluir o setor')
    } else {
      res.send('Setor excluido com sucesso')
    }
  })
})

module.exports = router
