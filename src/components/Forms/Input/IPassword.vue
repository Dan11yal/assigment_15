<template>
    <div class="main">
      <label for="text">Password</label>
      <input id="text" v-model="value" type="password" @input="checkInput"/>
      <button @click="clear">X</button>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
      props:{
          type:{
            type : String,
            default: 'text'
          },
          label : String
      },
      data(){
          return{
            value: '',
            error : '',
          }
      },
      methods:{
        clear(){
          this.value = '';
        },
        checkInput(){
         if (!/[A-Z]/.test(this.value)) {
            this.error = 'Password must contain at least one uppercase letter.';}
        else if (!/[a-z]/.test(this.value)) {
            this.error = 'Password must contain at least one lowercase letter.';} 
        else if (!/[0-9]/.test(this.value)) {
            this.error = 'Password must contain at least one digit.';}
        else if (!/[^A-Za-z0-9]/.test(this.value)) {
            this.error = 'Password must contain at least one special character.';} 
        else if (this.value.length <= 4) {
            this.error = 'Password must be at least 5 characters long.';}    
        else if(this.value.length > 8){
            this.error = 'Password must be max 8 characters long.';
        }else {
            this.setError();}   
        },
        setError(){
            this.error = '';
        }
      }
  }
  </script>

  
<style scoped>
.main {
  margin: 10px;
  display: flex;
  align-items: center;
}

label {
  font-size: 18px;
  margin-right: 10px;
  font-weight: 700;
  color: #151414;
}

input {
  padding: 10px;
  outline: none;
  border: 2px solid #333;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  width: 20%;
  border-radius: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:hover {
  border-color: #e2e9e7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
  outline: none;
  border: 2px solid #dedede;
  margin-left: -30px;
  padding: 8px;
  background-color: #fff;
  color: #333;
  transition: 0.5s;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

button:hover {
  color: #fff;
  background-color: #e92d2d;
}

p {
  color: red;
  margin-left: 10px;
}
</style>