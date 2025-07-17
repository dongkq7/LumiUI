<template>
  <h1 class="row-title">普通展示</h1>
  <div class="row">
    <LumiButton>默认按钮</LumiButton>
    <LumiButton type="primary">主要按钮</LumiButton>
    <LumiButton type="info">信息按钮</LumiButton>
    <LumiButton type="success">成功按钮</LumiButton>
    <LumiButton type="warning">警告按钮</LumiButton>
    <LumiButton type="danger">危险按钮</LumiButton>
  </div>
  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <LumiButton plain>默认按钮</LumiButton>
    <LumiButton type="primary" plain>主要按钮</LumiButton>
    <LumiButton type="info" plain>信息按钮</LumiButton>
    <LumiButton type="success" plain>成功按钮</LumiButton>
    <LumiButton type="warning" plain>警告按钮</LumiButton>
    <LumiButton type="danger" plain>危险按钮</LumiButton>
  </div>
  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <LumiButton round>默认按钮</LumiButton>
    <LumiButton type="primary" round>主要按钮</LumiButton>
    <LumiButton type="info" round>信息按钮</LumiButton>
    <LumiButton type="success" plain round>成功按钮</LumiButton>
    <LumiButton type="warning" plain round>警告按钮</LumiButton>
    <LumiButton type="danger" plain round>危险按钮</LumiButton>
  </div>
  <h1 class="row-title">禁用状态</h1>
  <div class="row">
    <LumiButton disabled>默认按钮</LumiButton>
    <LumiButton type="primary" disabled>主要按钮</LumiButton>
    <LumiButton type="info" disabled>信息按钮</LumiButton>
    <LumiButton type="success" disabled>成功按钮</LumiButton>
    <LumiButton type="warning" disabled>警告按钮</LumiButton>
    <LumiButton type="danger" disabled>危险按钮</LumiButton>
  </div>
  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <LumiButton loading>默认按钮</LumiButton>
    <LumiButton type="primary" loading>主要按钮</LumiButton>
    <LumiButton type="info" loading>信息按钮</LumiButton>
    <LumiButton type="success" loading round>成功按钮</LumiButton>
    <LumiButton type="warning" loading round>警告按钮</LumiButton>
    <LumiButton type="danger" loading round>危险按钮</LumiButton>
  </div>
  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <LumiButton icon="file">默认按钮</LumiButton>
    <LumiButton type="primary" icon="gear">主要按钮</LumiButton>
    <LumiButton type="info" icon="folder" plain>信息按钮</LumiButton>
    <LumiButton type="success" icon="bug" plain>成功按钮</LumiButton>
    <LumiButton type="warning" icon="code" round>警告按钮</LumiButton>
    <LumiButton type="danger" icon="cube" round>危险按钮</LumiButton>
  </div>
  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <LumiButton icon="file" size="small">默认按钮</LumiButton>
    <LumiButton type="primary" icon="gear" size="small">主要按钮</LumiButton>
    <LumiButton type="info" icon="folder" plain>信息按钮</LumiButton>
    <LumiButton type="success" icon="bug" plain>成功按钮</LumiButton>
    <LumiButton type="warning" icon="code" plain size="large">警告按钮</LumiButton>
    <LumiButton type="danger" icon="cube" plain size="large">危险按钮</LumiButton>
  </div>
  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <LumiButton type="danger" circle>验</LumiButton>
    <LumiButton type="primary" icon="gear" circle></LumiButton>
    <LumiButton type="info" icon="folder" circle plain></LumiButton>
    <LumiButton type="success" icon="bug" circle plain></LumiButton>
    <LumiButton type="warning" icon="code" circle disabled></LumiButton>
    <LumiButton type="danger" icon="cube" circle disabled></LumiButton>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
