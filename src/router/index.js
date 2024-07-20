import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../views/ContactList.vue';
import ContactDetails from '../views/ContactDetails.vue';
import NewContact from '../views/NewContact.vue';
import EditContact from '../views/EditContact.vue';

const routes = [
  { path: '/', component: ContactList },
  { path: '/contact/:id', component: ContactDetails },
  { path: '/new', component: NewContact },
  { path: '/edit/:id', component: EditContact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
