<template>
  <h1 class="row-title">基础用法</h1>
  <div class="row">
    <LumiDropdown
      placement="top"
      trigger="hover"
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
    >
      <LumiButton type="primary">hover打开下拉菜单</LumiButton>
    </LumiDropdown>
    <LumiDropdown
      placement="bottom"
      trigger="click"
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      hideAfterClick
    >
      <LumiButton type="primary">点击打开下拉菜单</LumiButton>
    </LumiDropdown>
  </div>
  <h1 class="row-title">手动打开和关闭</h1>
  <div class="row">
    <LumiDropdown
      placement="bottom"
      trigger="click"
      manual
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      ref="dropdownRef"
    >
      <LumiButton type="primary">手动打开下拉菜单</LumiButton>
    </LumiDropdown>
  </div>
  <div class="row">
    <LumiButton @click="openClick">打开</LumiButton>
    <LumiButton @click="closeClick">关闭</LumiButton>
  </div>
  <h1 class="row-title">支持VNode节点</h1>
  <div class="row">
    <LumiDropdown
      placement="bottom"
      trigger="click"
      :menu-options="options2"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
    >
      <LumiButton type="primary">点击打开下拉菜单</LumiButton>
    </LumiDropdown>
  </div>
</template>

<script setup>
import { ref, h } from 'vue'

const dropdownRef = ref(null)

const options = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' },
]

const options2 = [
  { key: 1, label: h('div', { class: 'bar', innerHTML: 'hello' }) },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' },
]

// 下拉列表显示状态改变的时候对应的回调函数
const visibleChangeHandler = (e) => {
  console.log(`当前下拉组件的状态为${e ? '显示' : '隐藏'}状态`)
}

// 在选择具体下拉项目的时候对应的回调函数
const selectHandler = (item) => {
  console.log(`你点击的项目为：${item.label}`)
}

const openClick = () => {
  dropdownRef.value.show()
}

const closeClick = () => {
  dropdownRef.value.hide()
}
</script>

<style lang="scss" scoped>
:deep(.bar) {
  color: orange;
}
</style>
