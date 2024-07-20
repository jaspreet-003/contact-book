<template>
    <form v-if="contact" @submit.prevent="updateContact">
      <div class="mb-3">
        <input v-model="contact.firstName" placeholder="First Name" class="form-control" required>
      </div>
      <div class="mb-3">
        <input v-model="contact.lastName" placeholder="Last Name" class="form-control" required>
      </div>
      <div class="mb-3">
        <input v-model="contact.email" placeholder="Email" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Update Contact</button>
    </form>
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
  
      const updateContact = () => {
        const index = contacts.value.findIndex(c => c.id === route.params.id);
        contacts.value[index] = contact.value;
        localStorage.setItem('contacts', JSON.stringify(contacts.value));
        router.push(`/contact/${contact.value.id}`);
      };
  
      return { contact, updateContact };
    },
  };
  </script>
  