<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <LumiIcon icon="user-secret" />
    <LumiIcon icon="bars" />
    <LumiIcon icon="shield-halved" />
    <LumiIcon icon="file" />
    <LumiIcon icon="filter" />
    <LumiIcon icon="gear" />
    <LumiIcon icon="barcode" />
    <LumiIcon icon="folder" />
    <LumiIcon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <LumiIcon icon="user-secret" size="2xs" />
    <LumiIcon icon="bars" size="xs" />
    <LumiIcon icon="shield-halved" size="sm" />
    <LumiIcon icon="file" size="lg" />
    <LumiIcon icon="filter" size="xl" />
    <LumiIcon icon="gear" size="2xl" />
    <LumiIcon icon="barcode" size="2x" />
    <LumiIcon icon="folder" size="3x" />
    <LumiIcon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <LumiIcon icon="user-secret" rotation="90" size="xl" />
    <LumiIcon icon="bars" rotation="270" size="xl" />
    <LumiIcon icon="shield-halved" rotation="180" size="xl" />
    <LumiIcon icon="file" flip="horizontal" size="xl" />
    <LumiIcon icon="filter" flip="vertical" size="xl" />
    <LumiIcon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <LumiIcon icon="user-secret" size="xl" beat />
    <LumiIcon icon="bars" size="xl" beat-fade />
    <LumiIcon icon="shield-halved" size="xl" bounce />
    <LumiIcon icon="file" size="xl" fade />
    <LumiIcon icon="filter" size="xl" flip />
    <LumiIcon icon="gear" size="xl" shake />
    <LumiIcon icon="barcode" size="xl" spin />
    <LumiIcon icon="folder" size="xl" spin spin-reverse />
    <LumiIcon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <LumiIcon icon="user-secret" size="xl" type="primary" />
    <LumiIcon icon="bars" size="xl" type="success" />
    <LumiIcon icon="shield-halved" size="xl" type="info" />
    <LumiIcon icon="file" size="xl" type="warning" />
    <LumiIcon icon="filter" size="xl" type="danger" />
    <LumiIcon icon="gear" size="xl" color="#e47412" />
    <LumiIcon icon="barcode" size="xl" color="#7ec102" />
    <LumiIcon icon="folder" size="xl" color="skyblue" />
    <LumiIcon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
