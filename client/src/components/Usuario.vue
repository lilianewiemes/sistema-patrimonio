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

    <!-- Lista de usuarios -->
    <b-row>
      <b-col>
        <h3>Lista de Usuários</h3>
      </b-col>
      <b-col>
        <b-button class="float-right" variant="primary" @click="openUsuario()">Adicionar</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table class="text-center" striped hover :items="usuarios" :fields="fields">
          <template slot="editar" slot-scope="data">
            <a href="#" @click="openUsuario(data.item._id)">Editar</a>
          </template>
          <template slot="excluir" slot-scope="data">
            <b-button variant="danger" @click="deleteUsuario(data.item._id)">Excluir</b-button>
          </template>
        </b-table>
        <h3 class="text-center" v-if="usuarios == 0">Nenhum usuário encontrado</h3>
      </b-col>
    </b-row>

    <!-- Modal -->
    <div>
      <b-modal ref="modalUsuario" title="Usuários">
        <b-form>
          <div class="d-block">
            <label for="input-default">Nome:</label>
            <b-form-input v-model="nomeUsuario" />
            <label for="input-default">Setor:</label>
            <b-form-select v-model="setorUsuario" :options="setores" />
          </div>
        </b-form>
        <div slot="modal-footer" class="float-right">
          <b-button class="ml-1" @click="hideModal">Fechar</b-button>
          <b-button class="ml-1" variant="primary" @click="saveUsuario">Salvar</b-button>
        </div>
      </b-modal>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios'

const url = 'api/usuario/'

export default {
  name: 'usuario',
  data() {
    return {
      usuarios: [],
      setores: [],
      fields: {
        'editar': {
          label: 'Editar'
        }, 
        'nome': {
          label: 'Nome'
        }, 
        'setor.nome': {
          label: 'Setor'
        }, 
        'excluir': {
          label: 'Excluir'
        }
      },
      message: {
        error: '',
        success: ''
      },
      idUsuario: '',
      nomeUsuario: '',
      setorUsuario: '',
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  created() {
    this.getUsuarios()
    this.getSetores()
  },

  methods: {

    // Busca os usuarios
    getUsuarios() {
      axios.get(url)
      .then(data => {
        this.usuarios = data.data.usuarios
      })
    },

    // Busca o usuario por ID quando abre o editar usuario ou o adicionar
    openUsuario(id) {
      if (!id) {
        this.idUsuario = ''
        this.nomeUsuario = ''
        this.setorUsuario = ''
        this.showModal()
      } else {
        axios.get(url + id)
          .then(data => {
            this.idUsuario = data.data.usuario._id
            this.nomeUsuario = data.data.usuario.nome
            this.setorUsuario = data.data.usuario.setor
            this.showModal()
          })
      }
    },

    // Busca os setores
    getSetores() {
      const urlSetor = 'api/setor/'

      axios.get(urlSetor)
      .then(data => {
        this.setores = data.data.setores.map(setor => {
          return {
            value: setor._id,
            text: setor.nome
          }
        })
      })
    },

    // Salva o usuario ou a edição do usuario
    saveUsuario() {
      if (this.idUsuario) {
        if (!this.nomeUsuario) {
          alert('Nome é obrigatório!')
        } else if (!this.setorUsuario) {
          alert('Setor é obrigatório!')
        } else {
          axios.put(url + this.idUsuario, { nome: this.nomeUsuario, setor: this.setorUsuario })
          .then(res => {
            this.hideModal()
            if (res.data.success_msg) {
              this.message.success = res.data.success_msg
              this.showAlert()
            } else {
              this.message.error = res.data.error_msg
              this.showAlert()
            }
          })
        }
      } else {
        if (!this.nomeUsuario) {
          alert('Nome é obrigatório!')
        } else if (!this.setorUsuario) {
          alert('Setor é obrigatório!')
        } else {
          axios.post(url, { nome: this.nomeUsuario, setor: this.setorUsuario })
          .then(res => {
            this.hideModal()
            if (res.data.success_msg) {
              this.message.success = res.data.success_msg
              this.showAlert()
            } else {
              this.message.error = res.data.error_msg
              this.showAlert()
            }
          })
        }
      }
      this.message.success = ''
      this.message.error = ''
      this.getUsuarios()
    },

    // Deleta o usuario
    deleteUsuario(id) {
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
        })
      }
      this.message.success = ''
      this.message.error = ''
      this.getUsuarios()
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
      this.$refs.modalUsuario.show()
    },

    // Fecha a modal
    hideModal() {
      this.$refs.modalUsuario.hide()
    }
  }
}
</script>

<style>
#body {
  padding-top: 80px;
}
</style>
