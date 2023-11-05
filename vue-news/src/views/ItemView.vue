<template>
  <div>
    <section>
      <user-profile-vue :info="fetchedItem">
        <template #username>
          <router-link 
            :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}
          </router-link>
        </template>
        <template #time>{{ fetchedItem.time_ago }}</template>
      </user-profile-vue>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfileVue from '../components/UserProfile.vue';
import bus from '../utils/bus';

export default {
  components:{
    UserProfileVue
  },
  computed:{
    ...mapGetters(['fetchedItem'])
  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id)
      .then(()=> {
        bus.$emit("end:spinner");
      })
      .catch((err)=>{
        console.error(err);
      })
  }
}
</script>

<style scoped>
.user-container{
  display:flex;
  align-content: center;
  padding: 0.5mm;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>