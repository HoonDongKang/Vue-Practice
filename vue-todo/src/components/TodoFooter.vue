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
      this.$store.commit('clearAllItems')
    }
  }
}
</script>

<style>

</style>