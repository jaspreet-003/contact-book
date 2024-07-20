<template>
    <div v-if="contact">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
      <div class="btn-group">
        <router-link :to="`/edit/${contact.id}`" class="btn custom-edit">Edit</router-link>
        <button @click="deleteContact" class="btn custom-delete">Delete</button>
        <router-link to="/" class="btn custom-back">Back</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contacts = ref(JSON.parse(localStorage.getItem('contacts')) || []);
      const contact = ref(contacts.value.find(c => c.id === route.params.id));
  
      const deleteContact = () => {
        const index = contacts.value.findIndex(c => c.id === route.params.id);
        contacts.value.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts.value));
        router.push('/');
      };
  
      return { contact, deleteContact };
    },
  };
  </script>
  
  <style scoped>
  .btn-group .btn {
    margin-right: 5px;
  }
  
  .custom-edit {
    background-color: #4CAF50; /* Green */
    color: white;
  }
  
  .custom-delete {
    background-color: #F44336; /* Red */
    color: white;
  }
  
  .custom-back {
    background-color: #2196F3; /* Blue */
    color: white;
  }
  
  .custom-edit:hover,
  .custom-delete:hover,
  .custom-back:hover {
    opacity: 0.8;
  }
  </style>
  