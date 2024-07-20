<template>
    <form @submit.prevent="addContact">
      <div class="mb-3">
        <input v-model="firstName" placeholder="First Name" class="form-control" required>
      </div>
      <div class="mb-3">
        <input v-model="lastName" placeholder="Last Name" class="form-control" required>
      </div>
      <div class="mb-3">
        <input v-model="email" placeholder="Email" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Add Contact</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const firstName = ref('');
      const lastName = ref('');
      const email = ref('');
      const contacts = ref(JSON.parse(localStorage.getItem('contacts')) || []);
      const router = useRouter();
  
      const addContact = () => {
        const newContact = { id: Date.now().toString(), firstName: firstName.value, lastName: lastName.value, email: email.value };
        contacts.value.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(contacts.value));
        router.push(`/contact/${newContact.id}`);
      };
  
      return { firstName, lastName, email, addContact };
    },
  };
  </script>
  