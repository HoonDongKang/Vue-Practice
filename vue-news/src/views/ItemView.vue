<template>
  <div>
    <section>
      <div>
        <div>
          User
        </div>
        <div>
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }} </router-link>
        </div>
        <div>
          {{ fetchedItem.time_ago}}
        </div>
        <h2>
          {{ fetchedItem.title }}
        </h2>
      </div>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters(['fetchedItem'])
  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id);
  }
}
</script>

<style>

</style>