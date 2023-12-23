<template>
  <div class="tooltip-container" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot>
      <Button>Click ME</Button>
    </slot>
    <div v-if="isTooltipVisible" class="tooltip">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTooltipVisible: false,
    };
  },
  props: {
    content: {
      type: String,
      required: true,
      default:'heellloo'
    },
  },
  methods: {
    showTooltip() {
      this.isTooltipVisible = true;
    },
    hideTooltip() {
      this.isTooltipVisible = false;
    },
  },
};
</script>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #9b9393;
  color: #443131;
  padding: 8px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s, transform 0.3s;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(-8px);
}

</style>