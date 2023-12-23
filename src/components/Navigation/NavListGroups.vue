<template>
    <div class="list-group-container">
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <a
            :href="item.link"
            :class="{ 'active': item.active }"
            @click.prevent="handleItemClick(item)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
    methods: {
      handleItemClick(item) {
        this.$emit("item-click", item);
      },
    },
  };
  </script>
  
  <style scoped>
    .list-group-container {
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease-in-out;
    }
  
    .list-group-container:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: black;
    }
  
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    li {
      margin-bottom: 0.5rem;
    }
    li,a{
        text-decoration: none;
        color: black;
    }
  
    a {
      text-decoration: none;
      transition: color 0.3s ease-in-out;
      cursor: pointer;
      font-size: 1rem;
      display: block;
      padding: 10px;
      border: 1px solid transparent;
      border-radius: 4px;
    }
  
    a:hover {
      color: #ddd;
      border-color: #ddd;
    }
  
    a.active {
      font-weight: bold;
      color: #ddd;
      border-color: #ddd;
    }
  </style>