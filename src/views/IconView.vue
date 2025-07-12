<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <PetalIcon icon="user-secret" />
    <PetalIcon icon="bars" />
    <PetalIcon icon="shield-halved" />
    <PetalIcon icon="file" />
    <PetalIcon icon="filter" />
    <PetalIcon icon="gear" />
    <PetalIcon icon="barcode" />
    <PetalIcon icon="folder" />
    <PetalIcon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <PetalIcon icon="user-secret" size="2xs" />
    <PetalIcon icon="bars" size="xs" />
    <PetalIcon icon="shield-halved" size="sm" />
    <PetalIcon icon="file" size="lg" />
    <PetalIcon icon="filter" size="xl" />
    <PetalIcon icon="gear" size="2xl" />
    <PetalIcon icon="barcode" size="2x" />
    <PetalIcon icon="folder" size="3x" />
    <PetalIcon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <PetalIcon icon="user-secret" rotation="90" size="xl" />
    <PetalIcon icon="bars" rotation="270" size="xl" />
    <PetalIcon icon="shield-halved" rotation="180" size="xl" />
    <PetalIcon icon="file" flip="horizontal" size="xl" />
    <PetalIcon icon="filter" flip="vertical" size="xl" />
    <PetalIcon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <PetalIcon icon="user-secret" size="xl" beat />
    <PetalIcon icon="bars" size="xl" beat-fade />
    <PetalIcon icon="shield-halved" size="xl" bounce />
    <PetalIcon icon="file" size="xl" fade />
    <PetalIcon icon="filter" size="xl" flip />
    <PetalIcon icon="gear" size="xl" shake />
    <PetalIcon icon="barcode" size="xl" spin />
    <PetalIcon icon="folder" size="xl" spin spin-reverse />
    <PetalIcon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <PetalIcon icon="user-secret" size="xl" type="primary" />
    <PetalIcon icon="bars" size="xl" type="success" />
    <PetalIcon icon="shield-halved" size="xl" type="info" />
    <PetalIcon icon="file" size="xl" type="warning" />
    <PetalIcon icon="filter" size="xl" type="danger" />
    <PetalIcon icon="gear" size="xl" color="#e47412" />
    <PetalIcon icon="barcode" size="xl" color="#7ec102" />
    <PetalIcon icon="folder" size="xl" color="skyblue" />
    <PetalIcon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
