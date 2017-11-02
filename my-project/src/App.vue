<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
        <li><router-link to="/hello">点我跳转到hello</router-link></li>
        <li><router-link to="/reverse">点我跳转到reverse</router-link></li>
        <li><router-link to="/loop">点我跳转到loop</router-link></li>
        <li><router-link to="/test">点我跳转到test</router-link></li>
        <li><router-link to="/ajax">点我跳转到ajax</router-link></li>
        <li><router-link to="/page">点我跳转到page</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
