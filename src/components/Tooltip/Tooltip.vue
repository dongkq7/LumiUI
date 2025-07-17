<template>
  <div class="lumi-tooltip" v-on="outerEvents">
    <!-- 触发的元素 -->
    <div class="lumi-tooltip__trigger" ref="triggerRef" v-on="events">
      <slot></slot>
    </div>
    <!-- 提示内容 -->
    <div class="lumi-tooltip__popper" ref="popperRef" v-if="isOpen" :style="floatingStyles">
      <!-- 考虑到有些时候提示内容会比较复杂，提供为插槽 -->
      <slot name="content">{{ content }}</slot>
      <!-- 箭头 -->
      <div
        ref="arrowRef"
        class="lumi-tooltip__arrow"
        :popper-placement="placement"
        :style="{
          position: 'absolute',
          left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
          top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useFloating, offset, arrow } from '@floating-ui/vue'
import { debounce } from 'lodash-es'
import propObj from './props'

defineOptions({
  name: 'LumiTooltip',
})
const props = defineProps(propObj)
const emit = defineEmits(['visible-change'])
const triggerRef = ref(null) // 触发元素
const popperRef = ref(null) // 提示框
const arrowRef = ref(null) // 箭头元素

// 控制是否显示提示框
const isOpen = ref(false)

// 触发元素要绑定多个事件，所以创建一个保存多个事件的对象
// 触发元素直接可以通过v-on的方式进行绑定
let events = reactive({})
let outerEvents = reactive({})

const { floatingStyles, middlewareData } = useFloating(triggerRef, popperRef, {
  placement: props.placement,
  middleware: [offset(5), arrow({ element: arrowRef })],
})

const openDebounce = debounce(() => {
  isOpen.value = true
  emit('visible-change', true)
}, props.openDelay)
const closeDebounce = debounce(() => {
  isOpen.value = false
  emit('visible-change', false)
}, props.closeDelay)

const open = () => {
  closeDebounce.cancel()
  openDebounce()
}
const close = () => {
  openDebounce.cancel()
  closeDebounce()
}

// 给触发元素绑定事件
const attachEvent = () => {
  // 判断触发方式：hover/click
  if (props.trigger === 'hover') {
    // 给外侧容器绑定leave事件，只要从trigger元素离开移入popper元素并且没有移到中间间隙，就不会触发leave事件
    outerEvents['mouseleave'] = close
    // 给外层容器也绑定enter事件，防止用户通过间隙进入popper元素后但是delay时间到了触发了close
    outerEvents['mouseenter'] = open
  }
  if (props.trigger === 'click') {
    events['click'] = () => (isOpen.value ? close() : open())
  }
}
// 如果用户要自定义触发，则不绑定事件
if (!props.manual) {
  attachEvent()
}

defineExpose({
  show: open,
  hide: close,
})
</script>

<style lang="scss" scoped></style>
