<template>
  <div>
    test1 is here
    <TestTwoVue @test2="getTest2">
    </TestTwoVue>
  </div>
</template>

<script>
import TestTwoVue from './TestTwo.vue'
export default {
  components:{
    TestTwoVue
  },
  data(){
    return{
      test2Data:''
    }
  },
  watch:{
    test2Data(value){
      console.log(value)
      this.$emit('test1Data',value)
    }
  },
  methods:{
    getTest2(value){
      this.test2Data = value
    }
  }
}
</script>

<style>

</style>