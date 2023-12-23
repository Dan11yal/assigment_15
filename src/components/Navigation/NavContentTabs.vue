<template>
    <div class="tabs-container">
       <ul class="tab-list">
         <li class="tab-item" v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)">
           <a class="tab-link" :class="{ 'tab-active': tab.isActive }">{{ tab.name }}</a>
         </li>
       </ul>
   
       <div class="tab-content">
         <slot></slot>
       </div>
    </div>
   </template>
   
   <script>
   export default {
    name: "Tabs",
    data() {
       return {
         tabs: [],
       };
    },
    created() {
       this.tabs = this.$children;
    },
    methods: {
       selectTab(i) {
         this.tabs.forEach((tab, index) => {
           tab.isActive = index === i;
         });
       },
    },
   };
   </script>
   
   <style scoped>
   .tabs-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
   }
   
   .tab-list {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #ccc;
   }
   
   .tab-item {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
   }
   
   .tab-link {
    text-decoration: none;
    color: #333;
   }
   
   .tab-active {
    color: #4caf50;
    border-bottom: 2px solid #4caf50;
   }
   
   .tab-content {
    padding: 20px;
   }
   </style>