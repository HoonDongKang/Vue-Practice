<template> 
  <div>
    <p v-for="user in this.$store.state.news" :key="user.id">
      <a :href=item.url>{{user.title}}</a>
      <small>
        {{ user.time_age }} by 
        <router-link :to="`/user/${user.user}`">{{ user.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>

export default {
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>