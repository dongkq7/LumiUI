<template>
  <div class="lumi-collapse">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { collapseProps, collapseContextKey } from './props'
defineOptions({
  name: 'LumiCollapse',
})
const props = defineProps(collapseProps)
const emit = defineEmits(['change', 'update:modelValue'])

const activeNames = ref(props.modelValue)

// 处理CollapseItem点击
// 由于CollapseItem组件是采用插槽的形式注入的，所以handleItemClick采用依赖注入的方式提供给CollapseItem
const handleItemClick = (itemName) => {
  let _activeNames = [...activeNames.value]
  // 手风琴模式，只打开一项
  if (props.accordion) {
    // 创建了一个新的数组，该数组中只有一个元素，如果已经打开这个面板了点击则清空数组
    _activeNames = [activeNames.value[0] === itemName ? '' : itemName]
  } else {
    // 可以打开多个
    const index = _activeNames.indexOf(itemName)
    if (index > -1) {
      // 说明已经打开了,从数组中删除
      _activeNames.splice(index, 1)
    } else {
      _activeNames.push(itemName)
    }
  }
  // 处理完毕，重新赋值
  activeNames.value = _activeNames
  emit('update:modelValue', _activeNames)
  emit('change', _activeNames)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
})
</script>

<style lang="scss" scoped></style>
