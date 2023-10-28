<template>
  <div id="app">
    <!-- <TodoHeader></TodoHeader>
    <TodoInput @addTodoItem="addOneItem"></TodoInput>
    <TodoList :propsdata="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem"></TodoList>
    <TodoFooter @clearAll="clearAllItems"></TodoFooter> -->
    <TestOneVue @test1Data="getTest1"></TestOneVue>
  </div>
</template>

<script>
// import TodoHeader from './components/TodoHeader.vue'
// import TodoFooter from './components/TodoFooter.vue'
// import TodoInput from './components/TodoInput.vue'
// import TodoList from './components/TodoList.vue'
import TestOneVue from './components/TestOne.vue'

export default {
  name: 'App',
  components:{
    // 'TodoHeader':TodoHeader,
    // 'TodoFooter': TodoFooter,
    // 'TodoInput':TodoInput,
    // 'TodoList':TodoList,
    TestOneVue
  },
  data(){
    return{
      todoItems:[],
      test2Data:''
    }
  },
  methods:{
    // addOneItem(todoItem){
    //   var obj = { completed:false, item: todoItem}
    //   localStorage.setItem(todoItem, JSON.stringify(obj))
    //   this.todoItems.push(obj)
    // },
    // removeOneItem(todoItem,index){
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index,1)
    // },
    // toggleOneItem(todoItem,index){
    //   this.todoItems[index].completed = !this.todoItems[index].completed
    //   localStorage.removeItem(todoItem.item)
    //   localStorage.setItem(todoItem.item,JSON.stringify(todoItem))

    // },
    // clearAllItems(){
    //   localStorage.clear()
    //   this.todoItems=[]
    // }
    getTest1(value){
      console.log(value)
      this.test2Data = value
    }
  },
}
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10xp 10px rgba(0,0,0,0.03);
  }
</style>
