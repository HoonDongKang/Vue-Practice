<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button @click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newTodoItem:""
    }
  },
  methods:{
    addTodo(){
      if(this.newTodoItem !== ''){
        this.$emit('addTodoItem',this.newTodoItem)
        this.clearInput()
      }
    },
    clearInput(){
      this.newTodoItem=''
    }
  }
}
</script>

<style>

</style>