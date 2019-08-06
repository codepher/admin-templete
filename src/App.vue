<template>
  <div class="global-container">
    <!-- <div>
      <router-link to="/">Home</router-link>|
      <router-link to="/user/index">aaa</router-link>|
      <el-link type="primary" href="/user/index">主要链接</el-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
}
.global-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
