<template>
   <div>
     <h3>{{ title }}</h3>
     <textarea v-model="content" cols="30" rows="10" class="custom-textarea" placeholder="write"></textarea>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       title: "Your Title",
       content: "",
     };
   },
 };
 </script>
 
 <style scoped>
 .main {
   margin: 10px;
   display: flex;
   align-items: center;
 }
 
 h3 {
   font-size: 24px;
   margin-bottom: 10px;
   color: #151414;
 }
 
 textarea {
   padding: 10px;
   outline: none;
   border: 2px solid #333;
   background-color: #fff;
   color: #333;
   font-size: 16px;
   width: 100%;
   border-radius: 10px;
   transition: border-color 0.3s ease, box-shadow 0.3s ease;
 }
 
 textarea:hover {
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