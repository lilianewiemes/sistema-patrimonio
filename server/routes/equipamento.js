const express = require('express') 
const router = express.Router()
const mongoose = require('mongoose')

// Model
require('../models/equipamento')
const Equipamento = mongoose.model('equipamentos')


// Get equipamentos
router.get('/', (req, res) => {
  Equipamento.find()
    .then((equipamentos) => {
      res.send({ equipamentos: equipamentos })
    })
    .catch((err) => {
      res.send('Houve um erro ao buscar os equipamentos')
      console.log(err)
    })
})

// Get equipamento
router.get('/:id', (req, res) => {
  Equipamento.findOne({ _id: req.params.id })
    .then((equipamento) => {
      res.send({ equipamento: equipamento })
    })
    .catch((err) => {
      res.send('Houve um erro ao buscar o equipamento')
      console.log(err)
    })
})

// Add equipamento
router.post('/', (req, res) => {
  var erros = []

  if (!req.body.numero) {
    erros.push({ texto: 'Numero inválido!' })
  }

  if (!req.body.usuario) {
    erros.push({ texto: 'Usuário inválido!' })
  }

  if (!req.body.setor) {
    erros.push({ texto: 'Setor inválido!' })
  }

  if (!req.body.tipo) {
    erros.push({ texto: 'Tipo inválido!' })
  }

  if (!req.body.marca) {
    erros.push({ texto: 'Marca inválido!' })
  }

  if (!req.body.modelo) {
    erros.push({ texto: 'Modelo inválido!' })
  }

  if (erros.length > 0) {
    res.send({ erros: erros })
  } else {
    const novoEquipamento = {
      numero: req.body.numero,
      usuario: req.body.usuario,
      setor: req.body.setor,
      tipo: req.body.tipo,
      marca: req.body.marca,
      modelo: req.body.modelo
    }

    new Equipamento(novoEquipamento).save()
      .then(function () {
        res.send('Equipamento criado com sucesso!')
      })
      .catch(function (erro) {
        res.send('Houve um erro ao salvar o equipamento, tente novamente.')
        console.log(erro)
      })
  }
})

// Put equipamento
router.put('/:id', (req, res) => {
  Equipamento.findOne({ _id: req.params.id })
    .then((equipamento) => {
      equipamento.numero = req.body.numero,
      equipamento.usuario = req.body.usuario,
      equipamento.setor = req.body.setor,
      equipamento.tipo = req.body.tipo,
      equipamento.marca = req.body.marca,
      equipamento.modelo = req.body.modelo

      equipamento.save()
        .then(() => {
          res.send('Equipamento editado com sucesso')
        })
        .catch((erro) => {
          res.send('Houve um erro ao tentar salvar a edição do equipamento')
          console.log(erro)
        })
    })
    .catch((erro) => {
      console.log('Houve um erro ao editar o equipamento' + erro)
    })
})

// Delete usuario
router.delete('/:id', (req, res) => {
  Equipamento.remove({ _id: req.params.id })
    .then(() => {
      console.log('Equipamento excluido com sucesso')
    })
    .catch((erro) => {
      console.log('Houve um erro ao excluir o equipamento' + erro)
    })
})

module.exports = router