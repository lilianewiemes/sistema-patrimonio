<template>
<div id="app">
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <div class="container">
        <b-navbar-brand href="#">Sistema de Gerenciamento de Patrimônio</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item-dropdown right text="Listar">
              <b-dropdown-item href="#"><router-link to="/equipamento">Equipamento</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link to="/usuario">Usuário</router-link></b-dropdown-item>
              <b-dropdown-item href="#"><router-link to="/setor">Setor</router-link></b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>
