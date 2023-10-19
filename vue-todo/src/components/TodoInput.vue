<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button @click="addTodo">add</button>

    <ModalCommon v-if="showModal" @close="showModal = false">
        <h3 slot="header">경고</h3>
        <h3 slot="body">경고2</h3>
        <h3 slot="footer">경고3</h3>
    </ModalCommon>
  </div>
</template>

<script>
import ModalCommon from './common/ModalCommon.vue'
export default {
  comments:{
    ModalCommon
  },
  data(){
    return{
      newTodoItem:"",
      showModal:false
    }
  },
  methods:{
    addTodo(){
      if(this.newTodoItem !== ''){
        this.$store.commit('addOneItem',this.newTodoItem)
        this.clearInput()
      } else{
        this.showModal = !this.showModal
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