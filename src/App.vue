<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 300px;
  margin: 20px auto;
}
#app * {
    box-sizing: border-box;
}
hr {
    border:none;
    border-bottom: 1px solid rgba(128,128,128,.5);
}
</style>
