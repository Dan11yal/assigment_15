<template>
    <div class="pagination-container">
      <button class="goPrev" @click="handlePrevClick" :disabled="isPrevDisabled">
        &lt;
      </button>
      <div class="pagination">
        <button
          v-for="(item, index) in visibleItems"
          :key="index"
          class="pagination__item"
          :class="{ 'pagination__item_active': item === activePage }"
          @click="handleNumBtnClick(item)"
        >
          {{ item }}
        </button>
      </div>
      <button class="goNext" @click="handleNextClick" :disabled="isNextDisabled">
        &gt;
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        activePage: this.min,
      };
    },
    computed: {
      visibleItems() {
        const start = Math.max(this.activePage - 2, this.min);
        const end = Math.min(start + 4, this.max);
        const items = [];
        for (let i = start; i <= end; i++) {
          items.push(i);
        }
        return items;
      },
      isPrevDisabled() {
        return this.activePage === this.min;
      },
      isNextDisabled() {
        return this.activePage === this.max;
      },
    },
    methods: {
      handleNumBtnClick(item) {
        this.activePage = item;
      },
      handlePrevClick() {
        if (!this.isPrevDisabled) {
          this.activePage -= 1;
        }
      },
      handleNextClick() {
        if (!this.isNextDisabled) {
          this.activePage += 1;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination-container {
    display: flex;
    align-items: center;
  }
  
  .goPrev,
  .goNext,
  .pagination__item {
    border: 1px solid #000;
    background-color: #fff;
    cursor: pointer;
    padding: 8px;
    margin: 4px;
    display: flex;
    align-items: center;
    color: #000;
  }
  
  .pagination__item_active {
    background-color: #000;
    color: #fff;
  }
  .pagination{
    display: flex;
  }
  </style>