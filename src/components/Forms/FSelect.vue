<template>
  <div class="form-select">
    <label :for="id">{{ label }}</label>
    <select :id="id" v-model="selectedOption" @change="handleSelectChange">
      <option disabled value="" hidden>Select an option</option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [
        { label: 'Lion', value: 'lion' },
        { label: 'Elephant', value: 'elephant' },
        { label: 'Kangaroo', value: 'kangaroo' },
    ]
    },
  },
  data() {
    return {
      selectedOption: "",
      error: "",
    };
  },
  methods: {
    handleSelectChange() {
      if (!this.selectedOption) {
        this.error = "Please choose an option.";
        return;
      }
      this.$emit("option-selected", this.selectedOption);
      this.setError();
    },
    setError() {
      this.error = "";
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

select {
  padding: 10px;
  padding-right: 20px;
  outline: none;
  border: 2px solid #333;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  width: 20%;
  border-radius: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

select:hover {
  border-color: #e2e9e7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

option{
  background-color: #fff;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

}
option:hover{
  border-color: #e2e9e7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

p {
  color: red;
  margin-left: 10px;
}
</style>