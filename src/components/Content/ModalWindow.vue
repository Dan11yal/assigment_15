<template>
  <div v-show="showModal" class="pop-up">
    <div class="pop-up__inner">
      <p class="pop-up__text">To use this website, you need to confirm that you are an adorable kitten.</p>
      <label class="pop-up__checkbox">
        <input class="pop-up__checkbox-input" type="checkbox" v-model="isCheckboxChecked" />
        <span class="pop-up__checkbox-label">Yes, I confirm</span>
      </label>
      <div class="pop-up__actions">
        <button ref="button" class="pop-up__button" :disabled="!isCheckboxChecked" @click="closeModal">Click!</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      isCheckboxChecked: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  watch: {
    isCheckboxChecked(newVal) {
      this.$refs.button.disabled = !newVal;
    },
  },
  mounted() {
    this.openModal();
  },
};
</script>

<style scoped>
.pop-up {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: var(--space-xl) var(--space-md);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
}

.pop-up__inner {
  background-color: #fff;
  border-radius: calc(0.75rem + var(--space-sm));
  box-shadow: 0 0 20px rgba(20, 21, 26, 0.1), 0 0 40px rgba(20, 21, 26, 0.2);
  margin: auto;
  max-width: 32rem;
  padding: var(--space-sm);
  width: 100%;
}

.pop-up__text {
  font-size: var(--text-lg);
  line-height: 1.4;
  margin-bottom: var(--space-sm);
}

.pop-up__checkbox {
  display: block;
  margin-bottom: var(--space-md);
}

.pop-up__checkbox-label {
  color: #73757d;
  font-size: var(--text-lg);
}

.pop-up__button {
  align-items: center;
  background-color: #14151a;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  font: 400 var(--text-lg) / 1.2 Inter, sans-serif;
  gap: var(--space-2xs);
  justify-content: center;
  line-height: 1.2;
  padding: 10px;
  transition: background-color 0.2s, color 0.2s;
  width: 100%;
}

.pop-up__button[disabled] {
  background-color: #f7f7f7;
  color: #73757d;
}

.pop-up__button:hover {
  background-color: #37383f;
}

.pop-up__button[disabled]:hover {
  background-color: #f7f7f7;
}
</style>