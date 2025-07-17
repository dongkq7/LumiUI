<template>
  <h1 class="row-title">不同方向</h1>
  <div class="row">
    <LumiTooltip content="this is a test" placement="top" @visible-change="handle">
      <LumiButton type="primary">top</LumiButton>
    </LumiTooltip>
    <LumiTooltip content="this is a test" placement="bottom">
      <LumiButton type="warning">bottom</LumiButton>
    </LumiTooltip>
    <LumiTooltip content="this is a test" placement="left">
      <LumiButton type="danger">left</LumiButton>
    </LumiTooltip>
    <LumiTooltip content="this is a test" placement="right">
      <LumiButton type="success">right</LumiButton>
    </LumiTooltip>
  </div>
  <h1 class="row-title">切换触发模式</h1>
  <div class="row">
    <LumiTooltip content="this is a test" placement="top" trigger="click">
      <LumiButton type="primary">top</LumiButton>
    </LumiTooltip>
    <LumiTooltip content="this is a test" placement="bottom" trigger="click">
      <LumiButton type="warning">bottom</LumiButton>
    </LumiTooltip>
    <LumiTooltip content="this is a test" placement="left" trigger="click">
      <LumiButton type="danger">left</LumiButton>
    </LumiTooltip>
    <LumiTooltip content="this is a test" placement="right" trigger="click">
      <LumiButton type="success">right</LumiButton>
    </LumiTooltip>
  </div>
  <h1 class="row-title">手动触发模式</h1>
  <div class="row">
    <LumiTooltip content="this is a test" placement="right" manual ref="tooltipRef">
      <LumiButton type="primary">right</LumiButton>
    </LumiTooltip>
  </div>
  <div class="row">
    <LumiButton @click="openHandler">打开提示框</LumiButton>
    <LumiButton @click="closeHandler">关闭提示框</LumiButton>
  </div>
  <h1 class="row-title">延时触发</h1>
  <div class="row">
    <LumiTooltip
      content="this is a test"
      placement="top"
      :open-delay="2000"
      :close-delay="2000"
      @visible-change="handle"
    >
      <LumiButton type="primary">top</LumiButton>
    </LumiTooltip>
    <LumiTooltip content="this is a test" placement="bottom" :open-delay="2000" :close-delay="2000">
      <LumiButton type="warning">bottom</LumiButton>
    </LumiTooltip>
    <LumiTooltip content="this is a test" placement="left" :open-delay="2000" :close-delay="2000">
      <LumiButton type="danger">left</LumiButton>
    </LumiTooltip>
    <LumiTooltip content="this is a test" placement="right" :open-delay="2000" :close-delay="2000">
      <LumiButton type="success">right</LumiButton>
    </LumiTooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tooltipRef = ref(null)
const handle = (isShow) => {
  if (isShow) console.log('提示框显示')
  else console.log('提示框隐藏')
}

const openHandler = () => {
  // 用户要手动打开
  tooltipRef.value.show()
}
const closeHandler = () => {
  // 用户要手动关闭
  tooltipRef.value.hide()
}
</script>

<style lang="scss" scoped></style>
