<template>
  <i class="petal-icon" :class="{ [`petal-icon--${type}`]: type }">
    <FontAwesomeIcon v-bind="iconProps" />
  </i>
</template>

<script setup>
import propsObj from './props'
import { computed } from 'vue'
import { omit } from 'lodash-es'

defineOptions({
  name: 'PetalIcon',
})
const props = defineProps(propsObj)
// 过滤掉自定义属性 type
const iconProps = computed(() => omit(props, ['type']))
</script>

<style lang="scss" scoped></style>
