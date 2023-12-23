<template>
    <div class="image-container">
      <img :src="src" :alt="alt" class="image" />
      <div v-if="caption" class="caption">{{ caption }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: '',
      },
      caption: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
  }
  
  .image {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  </style>