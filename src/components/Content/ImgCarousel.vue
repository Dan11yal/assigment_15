<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="wrapper">
      <ul class="imgList" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <li v-for="(item, index) in items" :key="index">
          <img :src="item.imgSrc" alt="Carousel Image" class="carousel-image">
        </li>
      </ul>
      <div class="left" @click.prevent="moveLeft">
        <span class="glyphicon glyphicon-menu-left" aria-hidden="true">-</span>
      </div>
      <div class="right" @click.prevent="moveRight">
        <span class="glyphicon glyphicon-menu-right" aria-hidden="true">+</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Image carousel',
    },
    items: {
      type: Array,
      default: () => [
  { imgSrc: require('@/assets/baxa.jpg') },
  { imgSrc: require('@/assets/baxa.jpg') },
  { imgSrc: require('@/assets/baxa.jpg') },
      ],
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    moveLeft() {
      const length = this.items.length;
      this.currentSlide = (this.currentSlide - 1 + length) % length;
    },
    moveRight() {
      const length = this.items.length;
      this.currentSlide = (this.currentSlide + 1) % length;
    },
  },
};
</script>

<style scoped>

body {
  background: #ecf0f1;
  text-align: center;
}

h2 {
  position: relative;
  margin: 40px auto;
  font-weight: bold;
}

.wrapper {
  position: relative;
  margin: 40px auto;
  border: 2px solid #000000;
  overflow: hidden;
  height: 500px;
  max-width: 700px;
  border-radius: 8px; 
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5); 
}

.imgList {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: transform 0.5s ease-in-out;
}

li {
  flex: 0 0 100%;
  background: rgba(134, 134, 134, 0.6);
  height: 500px;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px; 
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); 
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
}

li:hover {
  transform: scale(1.05); 
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4); 
  border-color: #ffffff;
}

li .nr {
  font-size: 200px;
  color: #fff;
  text-shadow: 2px 1px 1px #999;
}

.glyphicon-menu-left,
.glyphicon-menu-right {
  cursor: pointer;
  position: absolute;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 2px solid #ffffff;
  border-radius: 50%; 
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); 
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.glyphicon-menu-left:hover,
.glyphicon-menu-right:hover {
  background: #000000;
}
.glyphicon-menu-left {
  left: 0;
  top: 45%;
}

.glyphicon-menu-right {
  right: 0;
  top: 45%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px; 
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
}

.carousel-image:hover {
  transform: scale(1.05);
}
</style>