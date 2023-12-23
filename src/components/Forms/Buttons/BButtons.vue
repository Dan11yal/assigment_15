<template>
  <div class="main">
    <input type="button" :value="getValue()">
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {};
  },

  methods: {
    getValue() {
      return this.value || 'Click ME!';
    },
  },
};
</script>

<style>
.main {
  margin: 10px;
}

input {
  padding: 10px 30px;
  background-color: #000; /* Black background */
  border: 1px solid #fff; /* White border */
  outline: none;
  color: #fff; /* White text color */
  font-size: 18px;
  border-radius: 10px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow box */
}

input:hover {
  background-color: #fff; /* White background on hover */
  color: #000; /* Black text color on hover */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Slightly larger shadow on hover */
}
</style>