<template>
  <main role="main" class="container" id="setor">
      <div class="jumbotron">
        <fieldset>
          <legend>Lista de Setores</legend>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Editar</th>
                  <th>Nome</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="setor.id" v-for="setor in setores">
                  <td>Editar</td>
                  <td>{{ setor.nome }}</td>
                </tr>
              </tbody>
            </table>
        </fieldset>
      </div>
  </main>
</template>

<script>

export default {
  name: 'setor',
  data() {
    return {
      setores: []
    }
  },
  created() {
    fetch('http://localhost:8081/setor')
      .then(response => response.json())
      .then(json => {
        this.setores = json.setores
      })
  }
}
</script>
