<template>
  <div class="btn-group">
    <button
      v-for="item in items"
      :key="item.status"
      class="btn btn-xs"
      :class="{ 'active': val === item.status }"
      @click="$emit('change-status', item.status)"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: Number,
      default: 0, 
    },
    items: {
      type: Array,
      default: () => [
        {
          status: 0,
          title: "Pending",
          class: "btn-default",
        },
        {
          status: 1,
          title: "Verify",
          class: "btn-success",
        },
        {
          status: 2,
          title: "Decline",
          class: "btn-danger",
        },
      ],
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #353232; 
  border: 1px solid #fff; 
  color: #fff; 
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background-color: #d4d1d1; 
}

.active {
  background-color: #fff; 
  color: #474444; 
}

.btn-group {
  display: flex;
  gap: 8px;
}

</style>