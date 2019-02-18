<template>
<div id="app">
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-4">
    <a id="nav" class="navbar-brand" href="#">Sistema de Gerenciamento de Patrimonio</a>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
        </li>
        <li role="presentation" class="dropdown">
          <a href="#" class="dropdown-toggle header_links nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Adicionar</a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li class="dropdown-item"><a href="/equipamento">Equipamento</a></li>
            <li class="dropdown-item"><a href="/usuario">Usuário</a></li>
            <li class="dropdown-item"><a href="/setor"><router-link to="/setor">Setor</router-link></a></li>
          </ul>
        </li>
        <li role="presentation" class="dropdown">
         <a href="#" class="dropdown-toggle header_links nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Listar</a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li class="dropdown-item"><a href="/equipamento">Equipamento</a></li>
            <li class="dropdown-item"><a href="/usuario">Usuário</a></li>
            <li class="dropdown-item"><a href="/setor"><router-link to="/setor">Setor</router-link></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#nav {
  margin-left: 100px;
}

#navbarCollapse {
  margin-left: 500px;
}
</style>