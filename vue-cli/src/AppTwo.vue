<template>
  <div id="app">
    <!-- <app-header v-bind:child comp prop name="parent component prop"/> -->
    <app-header v-bind:propsdata="str" @renew='renewStr'/>
    {{str}}
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  components:{
    'app-header': AppHeader
  },
  data(){
    return{
      str:"Header"
    }
  },
  methods:{
    renewStr(){
      this.str = 'hi'
    }
  }
}
</script>

<style>

</style>