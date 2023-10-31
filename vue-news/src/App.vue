<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components:{
    ToolBar
  },
  methods:{
    fetchData(){
      console.log('hdidi')
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
a{
  color: #344952;
  text-decoration: none;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active{
  text-decoration: underline;
}
</style>
