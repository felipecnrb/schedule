<template>
    <div>
      <h1>Adicionar Novo Contato</h1>
      <form @submit.prevent="addContact">
        <div>
          <label for="name">Nome:</label>
          <input type="text" id="name" v-model="newContact.name" required>
        </div>
        <div>
          <label for="phone">Telefone:</label>
          <input type="text" id="phone" v-model="newContact.phone" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="newContact.email" required>
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  interface Contact {
    id: number
    name: string
    phone: string
    email: string
  }
  
  export default defineComponent({
    data() {
      return {
        newContact: {
          id: Date.now(),
          name: '',
          phone: '',
          email: ''
        } as Contact
      }
    },
    methods: {
      addContact() {
        fetch('/contacts.json')
          .then(response => response.json())
          .then(data => {
            data.push(this.newContact)
            // Aqui você deve salvar os dados de volta no JSON ou usar uma API para persistência
            alert('Contato adicionado com sucesso!')
            this.$router.push('/')
          })
      }
    }
  })
  </script>
  