<template>
  <h1 class="title">Petal UI</h1>
  <nav class="nav">
    <router-link to="/">Icon</router-link>
    <router-link to="/button">Button</router-link>
    <router-link to="/card">Card</router-link>
    <router-link to="/dialog">Dialog</router-link>
    <router-link to="/pager">Pager</router-link>
    <router-link to="/collapse">Collapse</router-link>
    <router-link to="/tooltip">Tooltip</router-link>
    <router-link to="/dropdown">Dropdown</router-link>
  </nav>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-weight: 200;
}

.nav {
  display: flex;
  height: 60px;
  justify-content: space-around;
  align-items: center;
}

.body {
  margin-top: 16px;
}

.active {
  border-bottom: 4px solid hsla(160, 100%, 37%, 1);
}
</style>
