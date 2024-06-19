<template>
    <div>
      <h1>Lista de Contatos</h1>
      <router-link to="/add">Adicionar Novo Contato</router-link>
      <ul>
        <li v-for="contact in contacts" :key="contact.id">
          <router-link :to="{ name: 'ContactDetails', params: { id: contact.id } }">
            {{ contact.name }}
          </router-link>
        </li>
      </ul>
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
        contacts: [] as Contact[]
      }
    },
    created() {
      fetch('/contacts.json')
        .then(response => response.json())
        .then(data => {
          this.contacts = data
        })
    }
  })
  </script>
  