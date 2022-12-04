<template>
  <button class="pagination-btn" :disabled="page === 1" @click="changePage(1)">
    <Icon icon="material-symbols:keyboard-double-arrow-left" />
  </button>
  <button
    class="pagination-btn"
    :disabled="!(page > 1)"
    @click="changePage(page - 1)"
  >
    <Icon icon="ooui:previous-ltr" />
  </button>
  <span class="pagination-page">{{ page }}</span>
  <button
    class="pagination-btn"
    :disabled="page === lastPag"
    @click="changePage(page + 1)"
  >
    <Icon icon="ooui:previous-rtl" />
  </button>
  <button
    class="pagination-btn"
    :disabled="page === lastPag"
    @click="changePage(lastPag)"
  >
    <Icon icon="ic:baseline-keyboard-double-arrow-right" />
  </button>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["count", "page"]);
const emit = defineEmits(["update:modelValue"]);
const changePage = (page) => {
  emit("update:modelValue", page);
};
const lastPag = computed(() => {
  return Math.ceil(props.count / 10);
});
</script>
<style>
.pagination-page {
  color: white;
  margin: 0 6px;
  text-decoration: underline ;

}
.pagination-btn {
  border: 2px solid gray;
  color: gray;
  background-color: transparent;
  cursor: pointer;
  margin: 0 3px;
}
</style>
