import { createRouter, createWebHistory } from 'vue-router'
import ContactList from '../views/ContactList.vue'
import ContactDetails from '../views/ContactDetails.vue'
import AddContact from '../views/AddContact.vue'

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/contact/:id',
    name: 'ContactDetails',
    component: ContactDetails,
    props: true
  },
  {
    path: '/add',
    name: 'AddContact',
    component: AddContact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
