<template>
  <b-container class="mt-4" id="body">

    <!-- Alertas -->
    <template>
      <div>
        <b-alert
        v-if="message.error"
        :show="dismissCountDown"
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        {{ message.error }}
        </b-alert>
      </div>
    </template>
    <template>
      <div>
        <b-alert
        v-if="message.success"
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        {{ message.success }}
        </b-alert>
      </div>
    </template>

    <!-- Lista de setores -->
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
        </b-table>
        <h3 class="text-center" v-if="setores == 0">Nenhum setor encontrado</h3>
      </b-col>
    </b-row>

    <!-- Modal -->
    <div>
      <b-modal ref="modalSetor" title="Setor">
        <b-form>
          <div class="d-block">
            <label for="input-default">Nome:</label>
            <b-form-input v-model="nomeSetor" />
          </div>
        </b-form>
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
      nomeSetor: '',
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  created() {
    this.getSetores()
  },

  methods: {

    // Busca os setores
    getSetores() {
      axios.get(url)
      .then(data => {
        this.setores = data.data.setores
      })
    },

    // Busca o setor por ID quando abre o editar setor
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

    // Salva o setor ou a edição do setor
    saveSetor() {
      if (this.idSetor) {
        if (!this.nomeSetor) {
          alert('Nome é obrigatório!')
        } else {
          axios.put(url + this.idSetor, { nome: this.nomeSetor })
          .then(res => {
            this.hideModal()
            if (res.data.success_msg) {
              this.message.success = res.data.success_msg
              this.showAlert()
            } else {
              this.message.error = res.data.error_msg
              this.showAlert()
            }
            this.getSetores()
          })
        }
      } else {
        if (!this.nomeSetor) {
          alert('Nome é obrigatório!')
        } else {
          axios.post(url, { nome: this.nomeSetor })
          .then(res => {
            this.hideModal()
            if (res.data.success_msg) {
              this.message.success = res.data.success_msg
              this.showAlert()
            } else {
              this.message.error = res.data.error_msg
              this.showAlert()
            }
            this.getSetores()
          })
        }
      }
      this.message.success = ''
      this.message.error = ''
    },

    // Deleta o setor
    deleteSetor(id) {
      var resposta = confirm("Você deseja excluir este registro?")

      if (resposta) {
        axios.delete(url + id)
        .then(res => {
          if (res.data.success_msg) {
              this.message.success = res.data.success_msg
              this.showAlert()
            } else {
              this.message.error = res.data.error_msg
              this.showAlert()
            }
          this.getSetores()

        })
      }
      this.message.success = ''
      this.message.error = ''
    },

    // Contagem regressiva do alerta
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    // Exibe o alerta
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },

    // Abre a modal
    showModal() {
      this.$refs.modalSetor.show()
    },

    // Fecha a modal
    hideModal() {
      this.$refs.modalSetor.hide()
    }
  }
}
</script>

<style>
#body {
  padding-top: 80px;
}
</style>
