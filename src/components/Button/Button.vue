<template>
  <button
    class="lumi-button"
    :class="{
      [`lumi-button--${type}`]: type,
      [`lumi-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled || loading"
  >
    <LumiIcon icon="spinner" spin v-if="loading" />
    <LumiIcon :icon="icon" v-if="icon" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'LumiButton',
})
defineProps(propObj)
</script>

<style lang="scss" scoped></style>
