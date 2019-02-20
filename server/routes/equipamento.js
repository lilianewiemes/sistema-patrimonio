const express = require('express') 
const router = express.Router()
const mongoose = require('mongoose')

// Model
require('../models/equipamento')
const Equipamento = mongoose.model('equipamentos')


// Get equipamentos
router.get('/', (req, res) => {
  Equipamento.find()
  .exec((err, equipamentos) => {
    if (err) {
      res.send({ error_msg: 'Houve um erro ao buscar os equipamentos' })
    } else if (equipamentos) {
      res.send({ equipamentos: equipamentos })
    } else {
      res.send({ error_msg: 'Equipamentos não encontrados' })
    }
  })
})

// Get equipamento
router.get('/:id', (req, res) => {
  Equipamento.findById({ _id: req.params.id })
  .exec((err, equipamento) => {
    if (err) {
      res.send({ error_msg: 'Houve um erro ao buscar o equipamento' })
    } else if (equipamento) {
      res.send({ equipamento: equipamento })
    } else {
      res.send({ error_msg: 'Equipamento não encontrado' })
    }
  })
})

// Add equipamento
router.post('/', (req, res) => {
  Equipamento.findOne({ numero: req.body.numero }).exec((err, equipamento) => {
    if (err) {
      res.send({ error_msg: 'Houve um erro ao salvar o equipamento' })
    } else if (equipamento) {
      res.send({ error_msg: 'O equipamento já existe' })
    } else {
      const novoEquipamento = {
        numero: req.body.numero,
        usuario: req.body.usuario,
        setor: req.body.setor,
        tipo: req.body.tipo,
        marca: req.body.marca,
        modelo: req.body.modelo
      }
  
      new Equipamento(novoEquipamento).save((err) => {
        if (err) {
          res.send({ error_msg: 'Houve um erro ao salvar o equipamento' })
        } else {
          res.send({ success_msg: 'Equipamento criado com sucesso' })
        }
      })
    }
  })
})

// Put equipamento
router.put('/:id', (req, res) => {
  Equipamento.findById({ _id: req.params.id })
  .exec((err, equipamento) => {
    Equipamento.findOne({ numero: req.body.numero })
      .exec((err, numero) => {
        if (err) {
          res.send({ error_msg: 'Houve um erro ao salvar o equipamento' })
        } else if (numero) {
          res.send({ error_msg: 'O equipamento já existe' })
        } else {
          equipamento.numero = req.body.numero,
          equipamento.usuario = req.body.usuario,
          equipamento.setor = req.body.setor,
          equipamento.tipo = req.body.tipo,
          equipamento.marca = req.body.marca,
          equipamento.modelo = req.body.modelo

          equipamento.save((err) => {
            if (err) {
              res.send({ error_msg: 'Houve um erro ao tentar salvar a edição do equipamento' })
            } else {
              res.send({ success_msg: 'Equipamento editado com sucesso' })
            }
          })
        }
      })
  })
})

// Delete usuario
router.delete('/:id', (req, res) => {
  Equipamento.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.send({ error_msg: 'Houve um erro ao excluir o equipamento' })
    } else {
      res.send({ success_msg: 'Equipamento excluido com sucesso' })
    }
  })
})

module.exports = router