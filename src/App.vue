<template>
  <div id="app">
    <fullpage>
      <!-- v-slot定义作用域和具名插槽会失效 -->
      <template slot-scope="props" slot="ss">  
        <page1 :state="props.state"></page1>
      </template>
      <template slot-scope="props" slot="s2">  
        <hha :state="props.state"></hha>
      </template>
    </fullpage>
  </div>
</template>

<script>
import fullpage from './components/fullpage'
import page1 from './components/page1'
import hha from './components/hha'
export default {
  name: 'App',
  components:{
    fullpage,
    page1,
    hha
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
}
body{
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
