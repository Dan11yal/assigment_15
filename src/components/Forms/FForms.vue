<template>
    <div>
      <form @submit.prevent="onSubmit" class="custom-form">
        <h2 class="form-title">Account</h2>
        <div class="form-element">
          <label for="name" class="form-label">First Name:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Enter your first name"
            required
            class="form-input"
          />
        </div>
        <div class="form-element">
          <label for="email" class="form-label">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
            class="form-input"
          />
        </div>
        <div class="form-element">
          <label for="password" class="form-label">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
            class="form-input"
          />
        </div>
        <button type="submit" class="form-button">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      onSubmit() {
        console.log("Form submitted!");
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-form {
    width: 300px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-title {
    font-size: 24px;
    font-weight: 700;
    color: #151414;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-element {
    margin-bottom: 15px;
  }
  
  .form-label {
    font-size: 16px;
    font-weight: 700;
    color: #151414;
    display: block;
    margin-bottom: 5px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    border: 2px solid #333;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-input:hover {
    border-color: #e2e9e7;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-input:focus {
    border-color: #777474;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .form-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form-button:hover {
    background-color: #333;
  }
  </style>
  