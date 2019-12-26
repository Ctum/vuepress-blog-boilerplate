<template>
  <div class="pagination">
    <div v-for="n in pages" :key="n" 
      @click="changePage(n)" 
      :class="{ active: n === currentPage + 1}" class="page-btn">
      {{ n}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pages: {
      type: Number
    },
    currentPage: {
      type: Number
    }
  },
  methods: {
    changePage(n) {
      this.$emit("page-change", n);
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}
.page-btn {
  padding: 6px 18px;
  border: 1px solid white;
  cursor: pointer;
  margin: 0 6px;
}
.pagination .active , .page-btn:hover {
  border: 1px solid #32c8cf;
  color: #32c8cf;
}
</style>
