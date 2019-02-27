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

    <!-- Lista de equipamentos -->
    <b-row>
      <b-col>
        <h3>Lista de Equipamentos</h3>
      </b-col>
      <b-col>
        <b-button class="float-right" variant="primary" @click="openEquipamento()">Adicionar</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table class="text-center" striped hover :items="equipamentos" :fields="fields">
          <template slot="editar" slot-scope="data">
            <a href="#" @click="openEquipamento(data.item._id)">Editar</a>
          </template>
          <template slot="excluir" slot-scope="data">
            <b-button variant="danger" @click="deleteEquipamento(data.item._id)">Excluir</b-button>
          </template>
        </b-table>
        <h3 class="text-center" v-if="equipamentos == 0">Nenhum equipamento encontrado</h3>
      </b-col>
    </b-row>

    <!-- Modal -->
    <div>
      <b-modal ref="modalEquipamento" title="Equipamento">
        <b-form>
          <div class="d-block">
            <label for="input-default">Número:</label>
            <b-form-input v-model="numero" />
            <label for="input-default">Usuário:</label>
            <b-form-select v-model="usuario" :options="usuarios" />
            <label for="input-default">Setor:</label>
            <b-form-select v-model="setor" :options="setores" />
            <label for="input-default">Tipo:</label>
            <b-form-input v-model="tipo" />
            <label for="input-default">Marca:</label>
            <b-form-input v-model="marca" />
            <label for="input-default">Modelo:</label>
            <b-form-input v-model="modelo" />
          </div>
        </b-form>
        <div slot="modal-footer" class="float-right">
          <b-button class="ml-1" @click="hideModal">Fechar</b-button>
          <b-button class="ml-1" variant="primary" @click="saveEquipamento">Salvar</b-button>
        </div>
      </b-modal>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios'

const url = 'api/equipamento/'

export default {
  name: 'equipamento',
  data() {
    return {
      equipamentos: [],
      usuarios: [],
      setores: [],
      fields: {
        'editar': {
          label: 'Editar'
        }, 
        'numero': {
          label: 'Número'
        }, 
        'usuario.nome': {
          label: 'Usuário'
        }, 
        'setor.nome': {
          label: 'Setor'
        }, 
        'tipo': {
          label: 'Tipo'
        }, 
        'marca': {
          label: 'Marca'
        }, 
        'modelo': {
          label: 'Modelo'
        }, 
        'excluir': {
          label: 'Excluir'
        }
      },
      message: {
        error: '',
        success: ''
      },
      idEquipamento: '',
      numero: '',
      usuario: '',
      setor: '',
      tipo: '',
      marca: '',
      modelo: '',
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  created() {
    this.getEquipamentos()
    this.getUsuarios()
    this.getSetores()
  },

  methods: {

    // Busca os equipamentos
    getEquipamentos() {
      axios.get(url)
      .then(data => {
        this.equipamentos = data.data.equipamentos
      })
    },

    // Busca o equipamento por ID quando abre o editar equipamento ou o adicionar
    openEquipamento(id) {
      if (!id) {
        this.idEquipamento = ''
        this.numero = ''
        this.usuario = ''
        this.setor = ''
        this.tipo = ''
        this.marca = ''
        this.modelo = ''
        this.showModal()
      } else {
        axios.get(url + id)
          .then(data => {
            this.idEquipamento = data.data.equipamento._id
            this.numero = data.data.equipamento.numero
            this.usuario = data.data.equipamento.usuario
            this.setor = data.data.equipamento.setor
            this.tipo = data.data.equipamento.tipo
            this.marca = data.data.equipamento.marca
            this.modelo = data.data.equipamento.modelo
            this.showModal()
          })
      }
    },

    // Busca os usuarios
    getUsuarios() {
      const urlUsuario = 'api/usuario/'

      axios.get(urlUsuario)
      .then(data => {
        this.usuarios = data.data.usuarios.map(usuario => {
          return {
            value: usuario._id,
            text: usuario.nome
          }
        })
      })
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

    // Salva o equipamento ou a edição do usuario
    saveEquipamento() {
      if (this.idEquipamento) {
        if (!this.numero) {
          alert('Número é obrigatório!')
        } else if (isNaN(this.numero)) {
          alert('Campo número requer um número!')
        } else if (!this.usuario) {
          alert('Usuário é obrigatório!')
        } else if (!this.setor) {
          alert('Setor é obrigatório!')
        } else if (!this.tipo) {
          alert('Tipo é obrigatório!')
        } else if (!this.marca) {
          alert('Marca é obrigatório!')
        } else if (!this.modelo) {
          alert('Modelo é obrigatório!')
        } else {
          axios.put(url + this.idEquipamento, { numero: this.numero, setor: this.setor,  usuario: this.usuario, tipo: this.tipo, marca: this.marca, modelo: this.modelo })
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
        if (!this.numero) {
          alert('Nome é obrigatório!')
        } else if (isNaN(this.numero)) {
          alert('Campo número requer um número!')
        } else if (!this.usuario) {
          alert('Usuário é obrigatório!')
        } else if (!this.setor) {
          alert('Setor é obrigatório!')
        } else if (!this.tipo) {
          alert('Tipo é obrigatório!')
        } else if (!this.marca) {
          alert('Marca é obrigatório!')
        } else if (!this.modelo) {
          alert('Modelo é obrigatório!')
        } else {
          axios.post(url, { numero: this.numero, setor: this.setor,  usuario: this.usuario, tipo: this.tipo, marca: this.marca, modelo: this.modelo })
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
      this.getEquipamentos()
    },

    // Deleta o equipamento
    deleteEquipamento(id) {
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
      this.getEquipamentos()
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
      this.$refs.modalEquipamento.show()
    },

    // Fecha a modal
    hideModal() {
      this.$refs.modalEquipamento.hide()
    }
  }
}
</script>

<style>
#body {
  padding-top: 80px;
}
</style>
