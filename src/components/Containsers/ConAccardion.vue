<template>
  <div>
    <div class="accordion">
      <h2>{{ title }}</h2>
      <div class="accordion-item" v-for="(item, index) in items" :key="index">
        <button class="accordion-button" @click="toggle(`item${index + 1}`)">{{ item.name }}</button>
        <div class="accordion-content" :key="index" v-show="this[`item${index + 1}`]">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Accordion',
    },
    items: {
      type: Array,
      default: () => [
      { name: 'Item 1', content: 'Lorem ipsum for Item 1' },
        { name: 'Item 2', content: 'Lorem ipsum for Item 2' },
        { name: 'Item 3', content: 'Lorem ipsum for Item 3' },
      ],
    },
  },
  data() {

    const dataObj = {};
    this.items.forEach((_, index) => {
      dataObj[`item${index + 1}`] = false;
    });

    return dataObj;
  },
  methods: {
    toggle(item) {
      this[item] = !this[item];
    },
  },
};
</script>

<style scoped>
body {
  background-color: #fff; 
}

.accordion {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.accordion-item {
  margin-bottom: 10px;
}

.accordion-button {
  width: 100%;
  padding: 10px;
  background-color: #302c2c; 
  color: #fff; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.accordion-button:hover {
  background-color: #9c9999; 
  color: #2f2b2b; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
}

.accordion-content {
  padding: 10px;
  animation: fade-in 0.5s ease;
}

</style>