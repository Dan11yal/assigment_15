<template>
  <div class="main">
    <input id="name" type="checkbox" @input="inputBox" v-model="check" class="custom-checkbox" />
    <label for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      check: Boolean
    };
  },
  methods: {
    inputBox() {
      this.$emit('update:checked', !this.check);
    },
  },
};
</script>

<style scoped>
.main {
  margin: 10px;
  display: flex;
  align-items: center;
}

label {
  font-size: 18px;
  margin-right: 10px;
  font-weight: 700;
  color: #151414;
}

input {
  padding: 10px;
  outline: none;
  border: 2px solid #333;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:hover {
  border-color: #e2e9e7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Add the existing button styles for consistency */
button {
  outline: none;
  border: 2px solid #dedede;
  margin-left: -30px;
  padding: 8px;
  background-color: #fff;
  color: #333;
  transition: 0.5s;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

button:hover {
  color: #fff;
  background-color: #e92d2d;
}

p {
  color: red;
  margin-left: 10px;
}
</style>