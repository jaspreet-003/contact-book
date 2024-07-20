<template>
    <div>
      <input v-model="search" placeholder="Search by name" class="form-control mb-3">
      <ul class="list-group">
        <li class="list-group-item" v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="`/contact/${contact.id}`">{{ contact.lastName }}, {{ contact.firstName }}</router-link>
        </li>
      </ul>
      <router-link to="/new" class="btn btn-primary mt-3">Add New Contact</router-link>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const contacts = ref(JSON.parse(localStorage.getItem('contacts')) || []);
      const search = ref('');
  
      const filteredContacts = computed(() => {
        return contacts.value
          .filter(contact => 
            contact.firstName.toLowerCase().includes(search.value.toLowerCase()) || 
            contact.lastName.toLowerCase().includes(search.value.toLowerCase()))
          .sort((a, b) => a.lastName.localeCompare(b.lastName));
      });
  
      return { contacts, search, filteredContacts };
    },
  };
  </script>
  