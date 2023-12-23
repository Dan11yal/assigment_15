<template>
  <button class="message-box-trigger" @click="showMessageBox">
    {{ buttonLabel }}
  </button>

  <dialog class="message-box" :open="isMessageBoxOpen" @close="hideMessageBox">
    <div class="message-box-content">
      <p>{{ messageContent }}</p>
      <form method="dialog">
        <button class="message-box-close-btn">Close</button>
      </form>
    </div>
  </dialog>
</template>

<script>
export default {
  props: {
    messageContent: {
      type: String,
      required: true,
      default: 'Your message content'
    },
    buttonLabel: {
      type: String,
      default: 'Messages',
    },
  },
  data() {
    return {
      isMessageBoxOpen: false,
    };
  },
  methods: {
    showMessageBox() {
      this.isMessageBoxOpen = true;
    },
    hideMessageBox() {
      this.isMessageBoxOpen = false;
    },
  },
};
</script>

<style scoped>
.message-box-trigger {
  appearance: none;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 4px;
  box-shadow: 0 2px 0 #fff;
  color: #fff;
  cursor: pointer;
  font: bold 2rem 'Rubik', sans-serif;
  padding: 10px;
  position: relative;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.message-box-trigger:hover {
  background-color: #fff;
  color: #000;
}

.message-box-trigger:active {
  background-color: #000;
  border-color: #fff;
  box-shadow: none;
}

.message-box {
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  padding: 10px;
  transform: translateY(2rem);
  transition: opacity 0.2s ease, transform 0.2s ease;
  visibility: hidden;
}

.message-box[open] {
  position: absolute;
  z-index: 20;
  left: 38%;
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

.message-box-content {
  text-align: center;
}

.message-box p {
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
  color: #000;
}

.message-box-close-btn {
  appearance: none;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 0 4px 0 #fff;
  color: #fff;
  cursor: pointer;
  font-size: 1.6;
  padding: 1rem 2rem;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.message-box-close-btn:hover {
  background-color: #fff;
  color: #000;
}
</style>