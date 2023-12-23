<template>
    <div class="container">
      <details class="accordion" :open="isOpen">
        <summary class="accordion-header">
          <div class="accordion-header-content">
            <span class="accordion-header-content-label">{{ label }}</span>
            <h2 class="accordion-header-content-title">{{ title }}</h2>
          </div>
        </summary>
        <div class="accordion-content">
          <p class="accordion-content-text">{{ content }}</p>
        </div>
      </details>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
        default:'idol',
      },
      title: {
        type: String,
        required: true,
        default:'Bakhdaulet Baktygaliev',
      },
      content: {
        type: String,
        required: true,
        default:"The name Bakdaulet is of Kazakh origin and is commonly given to boys. In Kazakh,  Therefore, Bakdaulet can be interpreted to mean",
      },
      isOpen: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .accordion {
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: #fff;
    color: #000;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
  }
  
  .accordion:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .accordion-header {
    border-bottom: 2px solid #000;
    position: relative;
    overflow: hidden;
    z-index: 2;
  }
  
  .accordion-header-content {
    padding: 10px;
    overflow: hidden;
    position: relative;
    z-index: 9;
  }
  
  .accordion-header-content-label {
    color: #000;
    transition: color 0.3s ease;
  }
  
  .accordion-header-content-title {
    margin-top: 10px;
    color: #5c5959;
    transition: color 0.3s ease;
  }
  
  .accordion-content {
    padding: 10px;
    position: relative;
    overflow: hidden;
  }
  
  .accordion-content-text {
    color: #000;
  }
  
  details summary {
    cursor: pointer;
    transition: all 225ms ease-out;
    position: relative;
  }
  
  details[open] summary {
    margin-bottom: 100px;
    overflow: hidden;
    position: relative;
    background: #242020;
  }
  
  details[open] .accordion-content {
    padding: 10px;
    margin-top: -100px;
  }
  
  details[open] .accordion-header-content-label {
    color: #fff;
  }
  
  details > summary {
    list-style: none;
  }
  
  details > summary::-webkit-details-marker {
    display: none;
  }
  summary::after {
    content: '+';
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 26px;
    color: #000;
    transition: color 0.3s ease;
  }
  
  details[open] summary::after {
    content: '-';
    font-size: 36px;
  }
  </style>