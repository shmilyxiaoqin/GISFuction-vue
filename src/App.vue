<template>
  <div id="app">
    <Main></Main>
  </div>
</template>
<script>
import Main from './components/Main'
export default {
  name: 'app',
  components: {
    'Main': Main
  }
}
</script>
<style>
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
