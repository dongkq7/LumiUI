<template>
  <button
    class="petal-button"
    :class="{
      [`petal-button--${type}`]: type,
      [`petal-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled || loading"
  >
    <PetalIcon icon="spinner" spin v-if="loading" />
    <PetalIcon :icon="icon" v-if="icon" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'PetalButton',
})
defineProps(propObj)
</script>

<style lang="scss" scoped></style>
