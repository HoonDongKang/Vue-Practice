<template> 
  <div>
    <div v-for="user in users" :key="user.id">{{user.title}}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api'

export default {
  data(){
    return{
      users: []
    }
  },
  created(){
    fetchNewsList()
      .then((res) => { this.users = res.data;})
      .catch((e) => { console.error(e); })
  }
}
</script>

<style>

</style>