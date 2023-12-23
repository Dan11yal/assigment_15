<template>
    <div class="search-container">
      <input type="text" class="search-input" placeholder="Search..." />
      <button class="search-button">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchBar",
  };
  </script>
  
  <style scoped>
  .search-container {
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    padding: 10px;
    width: 100%;
  }
  
  .search-input {
    flex: 1;
    padding: 10px;
    font-size: 16px; /* Adjusted font size */
    border: 2px solid #333;
    border-radius: 5px 0 0 5px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .search-input:hover {
    border-color: #e2e9e7;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .search-button {
    margin-left: -2px; /* Adjusted margin */
    padding: 10px;
    font-size: 16px; /* Adjusted font size */
    background-color: #fff;
    color: #333;
    border: 2px solid #dedede;
    border-radius: 0 5px 5px 0;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .search-button:hover {
    color: #fff;
    background-color: #e92d2d;
    border-color: #e92d2d;
  }
  
  </style>