<template>
  <transition name="dialog-fade">
    <div v-show="visible" class="lumi-dialog_wrapper">
      <!-- 控制对话框宽高 -->
      <div class="lumi-dialog" :style="{ width, marginTop: top }">
        <div class="lumi-dialog_header">
          <slot name="title">
            <span class="lumi-dialog_title">{{ title }}</span>
          </slot>
          <button class="lumi-dialog_headerbtn" @click="handleClick">
            <LumiIcon icon="xmark" />
          </button>
        </div>
        <!-- 中间内容 -->
        <div class="lumi-dialog_body">
          <slot></slot>
        </div>
        <div class="lumi-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'LumiDialog',
})
defineProps(propObj)
const emit = defineEmits(['close'])

function handleClick() {
  emit('close')
}
</script>

<style lang="scss" scoped></style>
