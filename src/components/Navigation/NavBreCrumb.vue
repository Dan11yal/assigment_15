<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb__list">
      <li v-for="(item, index) in items" :key="index" class="breadcrumb__item" :class="{ 'breadcrumb__item_active': item.isActive && !item.last }">
        <a v-if="!item.last" class="breadcrumb__link" :href="item.href">{{ item.title }}</a>
        <span v-else>{{ item.title }}</span>
        <span v-if="!item.last">/</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

.breadcrumb {
  font-size: 14px;
}

.breadcrumb__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.breadcrumb__item {
  margin-right: 5px;
  color: #333;
}

.breadcrumb__link {
  text-decoration: none;
  color: #000000;
  transition: color 0.3s ease;
}

.breadcrumb__link:hover {
  color: #908e8e;
}

.breadcrumb__item_active {
  color: #555;
  font-weight: bold;
}
</style>