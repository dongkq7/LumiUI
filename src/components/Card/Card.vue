<template>
  <div class="lumi-card" :style="width ? { width: width + 'px' } : {}">
    <div class="lumi-card-img" :stype="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <!-- 卡片描述，可以通过属性传递也可以通过插槽传递进来 -->
    <div v-if="summary" class="lumi-card-summary">{{ summary }}</div>
    <div v-else class="lumi-card-summary">
      <slot></slot>
    </div>
    <!-- footer 卡片样式与内容用户自己决定 -->
    <div class="lumi-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'LumiCard',
})
defineProps(propObj)
</script>

<style lang="scss" scoped></style>
