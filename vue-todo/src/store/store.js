import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  fetch(){
    const arr = []
    if(localStorage.length>0){
      for(var i= 0; i<localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  return arr;
}}

export const store = new Vuex.Store({
  state:{
    todoItems: storage.fetch()
  },
  //state 은 꼭 mutation 이용해서 변경
  mutations:{
    addOneItem(state,todoItem){
      var obj = { completed:false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj))
      state.todoItems.push(obj)
    },
    removeOneItem(state,payload){
      const {todoItem, index} = payload;
      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(index,1)
    },
    toggleOneItem(state,payload){
      const {todoItem, index} = payload;
      state.todoItems[index].completed = !state.todoItems[index].completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem))
    },
    clearAllItems(){
      localStorage.clear()
      this.todoItems=[]
    }
  }
})