<template>
    <div class="icons-container">
      <div class="icon" >
        <img :src= "require('@/assets/smile.png')" alt="Heart Icon">
      </div>
      <div class="icon">
        <img :src= "require('@/assets/smile.png')" alt="Star Icon">
      </div>
      <div class="icon" >
        <img :src= "require('@/assets/smile.png')" alt="Smile Icon">
      </div>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style scoped>
  .icons-container {
    display: flex;
    justify-content: center;
  }
  
  .icon {
    width: 100px;
    height: 100px;
    margin: 1rem;
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: border-color 0.3s, transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
  }
  
  .icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .icon::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(253, 253, 253, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .icon:hover::before {
    opacity: 1;
  }
  
  .icon:hover {
    border-color: #a9a2a2;
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
  </style>