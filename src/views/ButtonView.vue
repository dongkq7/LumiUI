<template>
  <h1 class="row-title">普通展示</h1>
  <div class="row">
    <PetalButton>默认按钮</PetalButton>
    <PetalButton type="primary">主要按钮</PetalButton>
    <PetalButton type="info">信息按钮</PetalButton>
    <PetalButton type="success">成功按钮</PetalButton>
    <PetalButton type="warning">警告按钮</PetalButton>
    <PetalButton type="danger">危险按钮</PetalButton>
  </div>
  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <PetalButton plain>默认按钮</PetalButton>
    <PetalButton type="primary" plain>主要按钮</PetalButton>
    <PetalButton type="info" plain>信息按钮</PetalButton>
    <PetalButton type="success" plain>成功按钮</PetalButton>
    <PetalButton type="warning" plain>警告按钮</PetalButton>
    <PetalButton type="danger" plain>危险按钮</PetalButton>
  </div>
  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <PetalButton round>默认按钮</PetalButton>
    <PetalButton type="primary" round>主要按钮</PetalButton>
    <PetalButton type="info" round>信息按钮</PetalButton>
    <PetalButton type="success" plain round>成功按钮</PetalButton>
    <PetalButton type="warning" plain round>警告按钮</PetalButton>
    <PetalButton type="danger" plain round>危险按钮</PetalButton>
  </div>
  <h1 class="row-title">禁用状态</h1>
  <div class="row">
    <PetalButton disabled>默认按钮</PetalButton>
    <PetalButton type="primary" disabled>主要按钮</PetalButton>
    <PetalButton type="info" disabled>信息按钮</PetalButton>
    <PetalButton type="success" disabled>成功按钮</PetalButton>
    <PetalButton type="warning" disabled>警告按钮</PetalButton>
    <PetalButton type="danger" disabled>危险按钮</PetalButton>
  </div>
  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <PetalButton loading>默认按钮</PetalButton>
    <PetalButton type="primary" loading>主要按钮</PetalButton>
    <PetalButton type="info" loading>信息按钮</PetalButton>
    <PetalButton type="success" loading round>成功按钮</PetalButton>
    <PetalButton type="warning" loading round>警告按钮</PetalButton>
    <PetalButton type="danger" loading round>危险按钮</PetalButton>
  </div>
  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <PetalButton icon="file">默认按钮</PetalButton>
    <PetalButton type="primary" icon="gear">主要按钮</PetalButton>
    <PetalButton type="info" icon="folder" plain>信息按钮</PetalButton>
    <PetalButton type="success" icon="bug" plain>成功按钮</PetalButton>
    <PetalButton type="warning" icon="code" round>警告按钮</PetalButton>
    <PetalButton type="danger" icon="cube" round>危险按钮</PetalButton>
  </div>
  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <PetalButton icon="file" size="small">默认按钮</PetalButton>
    <PetalButton type="primary" icon="gear" size="small">主要按钮</PetalButton>
    <PetalButton type="info" icon="folder" plain>信息按钮</PetalButton>
    <PetalButton type="success" icon="bug" plain>成功按钮</PetalButton>
    <PetalButton type="warning" icon="code" plain size="large">警告按钮</PetalButton>
    <PetalButton type="danger" icon="cube" plain size="large">危险按钮</PetalButton>
  </div>
  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <PetalButton type="danger" circle>验</PetalButton>
    <PetalButton type="primary" icon="gear" circle></PetalButton>
    <PetalButton type="info" icon="folder" circle plain></PetalButton>
    <PetalButton type="success" icon="bug" circle plain></PetalButton>
    <PetalButton type="warning" icon="code" circle disabled></PetalButton>
    <PetalButton type="danger" icon="cube" circle disabled></PetalButton>
  </div>
  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <PetalButton type="primary" @click="clickHandler" ref="btnRef">主要按钮</PetalButton>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
