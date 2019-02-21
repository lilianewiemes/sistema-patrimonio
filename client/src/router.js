import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Setor from './components/Setor.vue'
import Usuario from './components/Usuario.vue'
import Equipamento from './components/Equipamento.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/setor',
      name: 'setor',
      component: Setor
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: Usuario
    },
    {
      path: '/equipamento',
      name: 'equipamento',
      component: Equipamento
    }
  ]
}) 