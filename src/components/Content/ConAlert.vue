<template>
  <div class="alert__container" :class="{ closed }" v-show="!closed">
    <div class="spacer"></div>
    <div class="alert" :class="alertClass">
      <span class="alert__icon">⚠️</span>
      <span class="alert__text">{{ message }}</span>
      <button @click="closeAlert" class="alert__close">
        <span>&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "secondary", "warning", "error", "success"].includes(value),
    },
    message: {
      type: String,
      default: "Default Alert Message",
    },
  },
  data() {
    return {
      closed: false,
    };
  },
  computed: {
    alertClass() {
      return `alert__${this.type}`;
    },
  },
  methods: {
    closeAlert() {
      this.closed = true;
    },
  },
};
</script>

<style scoped>
.alert__container {
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  width: 50%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.125rem solid #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.alert__container:hover {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.spacer {
  margin-bottom: 1rem;
}

.alert {
  border-radius: 0.25rem;
  padding: 0.75rem;
  color: #333;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
}

.alert:hover {
  background-color: #f0f0f0;
}

.alert__icon {
  margin-right: 1rem;
  font-size: 1.5rem;
}

.alert__text {
  font-size: 1.125rem;
}

.alert__close {
  margin-left: auto;
  padding: 0.75rem;
  color: #333;
  background-color: rgba(255, 255, 255, 0.7);
  border: 0;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.alert__close:hover {
  background-color: #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.alert__close span {
  font-size: 1rem;
}

.alert__primary {
  background-color: #5cb3fd;
  border: 1px solid #3294e9;
}

.alert__secondary {
  background-color: #e2e3e3;
  border: 1px solid #c4c5c5;
}

.alert__warning {
  background-color: #fddb3a;
  border: 1px solid #e1c933;
}

.alert__error {
  background-color: #ff7b7b;
  border: 1px solid #e85252;
}

.alert__success {
  background-color: #8eff8e;
  border: 1px solid #5fc65f;
}

.closed {
  display: none;
}
</style>