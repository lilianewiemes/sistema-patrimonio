<template>
  <b-container class="mt-4">
    <div class="alert alert-danger" v-if="message.error">{{ message.error }}</div>
    <div class="alert alert-success" v-if="message.success">{{ message.success }}</div>
    <b-row>
      <b-col>
        <h3>Lista de Setores</h3>
      </b-col>
      <b-col>
        <b-button class="float-right" variant="primary" @click="openSetor()">Adicionar</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table class="text-center" striped hover :items="setores" :fields="fields">
          <template slot="editar" slot-scope="data">
            <a href="#" @click="openSetor(data.item._id)">Editar</a>
          </template>
          <template slot="excluir" slot-scope="data">
            <b-button variant="danger" @click="deleteSetor(data.item._id)">Excluir</b-button>
          </template>
          <h1 v-if="setores == 0">Nenhum setor encontrado</h1>
        </b-table>
      </b-col>
    </b-row>

    <!-- Modal -->
    <div>
      <b-modal ref="modalSetor" title="Setor">
        <div>
          <b-form>
            <div class="d-block text-center">
              <b-form-input v-model="nomeSetor" required/>
            </div>
          </b-form>
        </div>
        <div slot="modal-footer" class="float-right">
          <b-button class="ml-1" @click="hideModal">Fechar</b-button>
          <b-button class="ml-1" variant="primary" @click="saveSetor">Salvar</b-button>
        </div>
      </b-modal>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios'

const url = 'http://localhost:8081/setor/'

export default {
  name: 'setor',
  data() {
    return {
      setores: [],
      fields: ['editar', 'nome', 'excluir'],
      message: {
        error: '',
        success: ''
      },
      idSetor: '',
      nomeSetor: ''
    }
  },
  created() {
    this.getSetores()
    console.log(this.setores)
  },
  methods: {
    showModal() {
      this.$refs.modalSetor.show()
    },
    hideModal() {
      this.$refs.modalSetor.hide()
    },
    getSetores() {
      axios.get(url)
      .then(data => {
        this.setores = data.data.setores
      })
    },
    openSetor(id) {
      if (!id) {
        this.idSetor = ''
        this.nomeSetor = ''
        this.showModal()
      } else {
        axios.get(url + id)
          .then(data => {
            this.idSetor = data.data.setor._id
            this.nomeSetor = data.data.setor.nome
            this.showModal()
          })
      }
    },

    saveSetor() {
      if (this.idSetor) {
        axios.put(url + this.idSetor, { nome: this.nomeSetor })
          .then(res => {
            this.hideModal()
            this.message.success = res.data
            this.getSetores()
          })
      } else {
        axios.post(url, { nome: this.nomeSetor })
          .then(res => {
            this.hideModal()
            this.message.success = res.data
            this.getSetores()
          })
      }
    },

    deleteSetor(id) {
      var resposta = confirm("Você deseja excluir este registro?")

      if (resposta) {
        axios.delete(url + id)
        .then(res => {
          this.message.success = res.data
          this.getSetores()
        })
      }
    }
  }
}
</script>
