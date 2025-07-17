<template>
  <div class="lumi-dropdown">
    <LumiTooltip
      ref="tooltipRef"
      :trigger="trigger"
      :placement="placement"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChangeHandler"
    >
      <slot></slot>
      <!-- 提示内容插入到Tooltip的content插槽中 -->
      <template #content>
        <ul class="lumi-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li class="lumi-dropdown__divided" v-if="item.divided"></li>
            <li
              class="lumi-dropdown__item"
              :class="{ 'is-disabled': item.disabled }"
              @click="itemClick(item)"
            >
              <RenderVnode :vNode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </LumiTooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import propObj from './props'
import RenderVnode from '../Common/RenderVnode.js'

defineOptions({
  name: 'LumiDropdown',
})

const props = defineProps(propObj)
const emit = defineEmits(['select', 'visible-change'])
const tooltipRef = ref(null)

const itemClick = (item) => {
  if (item.disabled) return
  emit('select', item)
  // 是否点击之后关闭下拉菜单
  if (props.hideAfterClick) {
    tooltipRef.value.hide()
  }
}

const visibleChangeHandler = (visible) => {
  emit('visible-change', visible)
}

defineExpose({
  show: () => tooltipRef.value.show(),
  hide: () => tooltipRef.value.hide(),
})
</script>

<style lang="scss" scoped></style>
