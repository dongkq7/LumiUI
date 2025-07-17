<template>
  <div class="lumi-pager" :class="{ [`lumi-pager--${type}`]: type, [`lumi-pager--${size}`]: size }">
    <!-- 首页 -->
    <a :class="currentPage === 1 ? 'disabled' : ''" @click.prevent="toFirst">首页</a>
    <!-- 上一页 -->
    <a
      :class="currentPage === 1 ? 'disabled' : ''"
      :disabled="currentPage === 1"
      @click.prevent="toPre"
    >
      <LumiIcon icon="angles-left" />
    </a>
    <!-- 根据计算出来的pager来进行渲染 -->
    <!-- 当总页码大于最大渲染页码并且当前页大于第五页时，先渲染出来1 -->
    <a v-if="total > pagerCount && currentPage > 5" @click.prevent="toFirst">1</a>
    <a v-if="total > pagerCount && currentPage > 5" @click.prevent="toPage(currentPage - 5)"
      ><LumiIcon icon="ellipsis" size="sm"
    /></a>
    <a
      v-for="page in pager"
      :key="page"
      :class="page == currentPage ? 'active' : ''"
      @click.prevent="toPage(page)"
      >{{ page }}</a
    >
    <!-- 渲染不完且页码比较靠前或靠中间时展示 -->
    <a v-if="total > pagerCount && currentPage < total - 4" @click.prevent="toPage(currentPage + 4)"
      ><LumiIcon icon="ellipsis" size="sm"
    /></a>
    <a v-if="total > pagerCount && currentPage < total - 4" @click.prevent="toLast">{{ total }}</a>
    <!-- 下一页 -->
    <a :class="currentPage === total ? 'disabled' : ''" @click.prevent="toNext">
      <LumiIcon icon="angles-right" />
    </a>
    <!-- 尾页 -->
    <a :class="currentPage === total ? 'disabled' : ''" @click.prevent="toLast">尾页</a>
  </div>
</template>

<script setup>
import propObj from './props'
import { computed } from 'vue'
defineOptions({
  name: 'LumiPager',
})
const props = defineProps(propObj)
const emit = defineEmits(['current-change'])

const pager = computed(() => {
  // 存放要渲染的页码
  const renderPage = []
  // 分情况进行判断
  // 1.全部渲染，总页码小于最大渲染的页码
  if (props.total < props.pagerCount) {
    for (let i = 1; i <= props.total; i++) {
      renderPage.push(i)
    }
  } else {
    //2.大于最大页码，无法全部渲染，这里又要分情况处理
    // 当前页比较靠前 如[1] 2 3 4 5 ... 20
    // 当前页比较靠中间 如 1 ... 5 6 [7] 8 9 ... 20
    // 当前页比较靠后 如 1...16 17 18 19 [20]
    if (props.currentPage <= 5) {
      // 比较靠前，先把前5页放进数组
      for (let i = 1; i <= 5; i++) {
        renderPage.push(i)
      }
    } else if (props.currentPage >= props.total - 4) {
      // 比较靠后，先把后5页放进数组
      for (let i = props.total - 4; i <= props.total; i++) {
        renderPage.push(i)
      }
    } else {
      // 靠中间，先把中间5页放进数组
      for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
        renderPage.push(i)
      }
    }
  }
  return renderPage
})

function toFirst() {
  if (props.currentPage === 1) return
  emit('current-change', 1)
}

function toLast() {
  if (props.currentPage === props.total) return
  emit('current-change', props.total)
}

function toPre() {
  if (props.currentPage === 1) return
  emit('current-change', props.currentPage - 1)
}

function toNext() {
  if (props.currentPage === props.total) return
  emit('current-change', props.currentPage + 1)
}

function toPage(page) {
  emit('current-change', page)
}
</script>

<style lang="scss" scoped></style>
