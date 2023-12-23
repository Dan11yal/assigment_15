<template>
  <div class="dropdown" :class="{ 'dropdown--show': isOpen }">
    <button class="dropdown__button" @click="toggleDropdown">
      {{ buttonText }}<i class="fa-solid fa-caret-down"></i>
    </button>
    <div class="dropdown__items">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="dropdown__item"
        @click="handleItemClick(item)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ["Dropdown item 1", "Dropdown item 2", "Dropdown item 3"],
    },
    buttonText: {
      type: String,
      default: "Open dropdown",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    handleItemClick(item) {
      this.$emit("item-selected", item);
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown__button {
  padding: 1rem 1.5rem;
  background-color: #000; /* Black background */
  border: none;
  border-radius: 0.5rem;
  color: #fff; /* White text color */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.dropdown__button:hover{
  background-color: #dbd6d6;
  color: #000;
}

.dropdown__button i {
  margin-left: 1rem;
}

.dropdown__items {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
} 

.dropdown__item {
  display: block;
  width: 100%;
  padding: 1rem;
  text-align: left;
  color: #000; /* Black text color */
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown__item:hover {
  background-color: #cecece; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);/* Light gray on hover */
}

.dropdown--show .dropdown__items {
  display: block;
  animation: fadeIn 0.3s ease-in-out; /* Fade-in animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>