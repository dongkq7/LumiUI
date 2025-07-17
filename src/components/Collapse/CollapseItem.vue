<template>
  <div class="lumi-collapse-item" :class="{ 'is-disabled': disabled }">
    <div
      :id="`item-header-${name}`"
      class="lumi-collapse-item__header"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
      @click="handleItemClick"
    >
      <slot name="title">{{ title }}</slot>
      <LumiIcon icon="angle-right" class="header-angle" />
    </div>
    <transition name="slide" v-on="transitionEvents">
      <!-- 内容部分 -->
      <div class="lumi-collapse-item__wrapper" v-if="isActive">
        <div class="lumi-collapse-item__content" :id="`item-header-${title}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { collapseItemProps, collapseContextKey } from './props'
defineOptions({
  name: 'LumiCollapseItem',
})
const props = defineProps(collapseItemProps)

// 拿到父组件注入的内容
const collapseContext = inject(collapseContextKey)
const isActive = computed(() => collapseContext.activeNames.value.includes(props.name))

const handleItemClick = () => {
  if (props.disabled) return
  collapseContext.handleItemClick(props.name)
}

// 指定过渡开始和结束时的不同样式
const transitionEvents = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = el.scrollHeight + 'px'
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
}
</script>

<style lang="scss" scoped></style>
