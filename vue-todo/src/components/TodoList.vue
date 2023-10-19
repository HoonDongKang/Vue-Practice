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
  methods:{
    removeTodo(todoItem, index){
      this.$store.commit('removeOneItem', {todoItem,index})
    },
    toggleComplete(todoItem, index){
      this.$store.commit('toggleOneItem', {todoItem,index})
    }
  }
}
</script>

<style>
.textCompleted{
  color:red
}
</style>