<template>
    <div v-if="contact">
      <h1>{{ contact.name }}</h1>
      <p>Phone: {{ contact.phone }}</p>
      <p>Email: {{ contact.email }}</p>
      <router-link to="/">Voltar para a Lista</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useRoute } from 'vue-router'
  
  interface Contact {
    id: number
    name: string
    phone: string
    email: string
  }
  
  export default defineComponent({
    data() {
      return {
        contact: null as Contact | null
      }
    },
    created() {
      const route = useRoute()
      fetch('/contacts.json')
        .then(response => response.json())
        .then(data => {
          this.contact = data.find((contact: Contact) => contact.id === Number(route.params.id))
        })
    }
  })
  </script>
  