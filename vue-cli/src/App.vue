<template>
  <form @submit="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="password" id="password" v-model="password">
    </div>passworddd
    <button type="submit">Login</button>

  </form>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:'',

    }
  },
  methods:{
    submitForm(event){
      event.preventDefault()
    }
  }
}
</script>

<style>

</style>