<template>
  <h1 class="row-title">总页数 total 大于页码最大显示数 pager-count，此时无法全部显示</h1>
  <div class="row">
    <LumiPager
      :total="20"
      :current-page="currentPage1"
      @current-change="(page) => (currentPage1 = page)"
    />
  </div>
  <h1 class="row-title">总页码数 total 小于等于页码最大显示数 pager-count，可以全部显示</h1>
  <div class="row">
    <LumiPager
      :total="10"
      :current-page="currentPage2"
      @current-change="(page) => (currentPage2 = page)"
    />
  </div>
  <h1 class="row-title">页码最大显示数 pager-count 是可以调整的</h1>
  <div class="row">
    <LumiPager
      :total="12"
      :pager-count="15"
      :current-page="currentPage3"
      @current-change="(page) => (currentPage3 = page)"
    />
  </div>
  <h1 class="row-title">调整主题颜色</h1>
  <div class="row">
    <LumiPager
      :total="20"
      type="success"
      :current-page="currentPage4"
      @current-change="(page) => (currentPage4 = page)"
    />
  </div>
  <div class="row">
    <LumiPager
      :total="20"
      type="danger"
      :current-page="currentPage5"
      @current-change="(page) => (currentPage5 = page)"
    />
  </div>
  <h1 class="row-title">调整大小</h1>
  <div class="row">
    <LumiPager
      :total="20"
      :current-page="currentPage6"
      size="small"
      @current-change="(page) => (currentPage6 = page)"
    />
  </div>
  <div class="row">
    <LumiPager
      :total="20"
      :current-page="currentPage7"
      @current-change="(page) => (currentPage7 = page)"
    />
  </div>
  <div class="row">
    <LumiPager
      :total="20"
      :current-page="currentPage8"
      size="large"
      @current-change="(page) => (currentPage8 = page)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const currentPage1 = ref(1)
const currentPage2 = ref(1)
const currentPage3 = ref(1)
const currentPage4 = ref(1)
const currentPage5 = ref(1)
const currentPage6 = ref(1)
const currentPage7 = ref(1)
const currentPage8 = ref(1)
</script>

<style lang="scss" scoped>
.row {
  width: 1000px;
}
</style>
