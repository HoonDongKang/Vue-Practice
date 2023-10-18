<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in this.$store.state.todoItems" :key="index">
        <input type="checkbox" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete(todoItem,index)">
        <span :class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <button @click="removeTodo(todoItem, index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['propsdata'],
  methods:{
    removeTodo(todoItem, index){
      this.$emit('removeItem',todoItem,index)
    },
    toggleComplete(todoItem, index){
      this.$emit('toggleItem',todoItem, index)
    }
  }
}
</script>

<style>
.textCompleted{
  color:red
}
</style>