<template>
    <div class="sidebar">
       <ul class="sidebar-menu">
         <li class="sidebar-item">
           <a href="#" class="sidebar-link">Home</a>
         </li>
         <li class="sidebar-item">
           <a href="#" class="sidebar-link">About</a>
         </li>
         <li class="sidebar-item">
           <a href="#" class="sidebar-link">Contact</a>
         </li>
       </ul>
    </div>
   </template>
   
   <script>
   export default {
    name: "Sidebar",
   };
   </script>
   
   <style scoped>
   .sidebar {
    background-color: #f7f7f7;
    color: #333;
    padding: 20px 0;
    width: 200px;
   }
   
   .sidebar-menu {
    list-style: none;
    margin: 0;
    padding: 0;
   }
   
   .sidebar-item {
    margin-bottom: 10px;
   }
   
   .sidebar-link {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    display: block;
    padding: 5px 10px;
   }
   
   .sidebar-link:hover {
    background-color: #e7e7e7;
    text-decoration: none;
   }
   </style>