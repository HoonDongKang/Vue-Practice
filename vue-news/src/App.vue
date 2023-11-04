<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <spinner-comp-vue :loading="loadingStatus"></spinner-comp-vue>
  </div>
</template>

<script>
import SpinnerCompVue from './components/SpinnerComp.vue'
import ToolBar from './components/ToolBar.vue'
import bus from "./utils/bus"

export default {
  components:{
    ToolBar,
    SpinnerCompVue
  },
  methods:{
    fetchData(){
      console.log('hdidi')
    },
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  data(){
    return{
      loadingStatus: false,
    }
  },
  created(){
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
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
