<template>
  <div>
    <user-profile-vue :info="userInfo">
        <template #username>{{userInfo.id}}</template>
        <template #time>{{userInfo.created}}</template>
        <template #karma>{{userInfo.karma}}</template>
    </user-profile-vue>
  </div>
</template>

<script>
import UserProfileVue from '../components/UserProfile.vue';
export default {
  components:{
    UserProfileVue
  },
  computed:{
    userInfo(){
      return this.$store.state.user
    }
  },
  created(){
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', username);
  },
}
</script>

<style>

</style>