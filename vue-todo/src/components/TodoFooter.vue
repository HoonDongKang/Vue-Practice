<template>
  <div>
    <span @click="clearTodo">
      Clear All
    </span>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo(){
      this.$emit('clearAll')
    }
  }
}
</script>

<style>

</style>