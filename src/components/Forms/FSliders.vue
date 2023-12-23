<template>
    <div class="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        step="3"
        v-model="sliderValue"
        class="slider-input"
      />
      <span class="slider-value" :style="{ transform: 'scale(' + (1 + sliderValue / 200) + ')' }">
        {{ sliderValue }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sliderValue: 30,
      };
    },
  };
  </script>
  
  <style scoped>
  .slider-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .slider-input {
    width: 100%;
    padding: 0px; 
    border: 2px solid #000; 
    background-color: #fff; 
    border-radius: 8px; 
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  
  .slider-input:hover {
    background-color: #f2f2f2;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .slider-value {
    font-size: 18px;
    color: #000; 
    font-weight: bold;
    transition: transform 0.3s;
  }
  </style>