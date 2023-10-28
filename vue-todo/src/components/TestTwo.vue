<template>
  <button @click="emit">
    test2
  </button>
</template>

<script>
export default {
  data(){
    return{
      emitData:'1'
    }
  },
  methods:{
    emit(){
      console.log(this.emitData)
      this.$emit('test2',this.emitData)
    }
  }
}
</script>

<style>

</style>