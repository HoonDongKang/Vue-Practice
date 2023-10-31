<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <div class="point">
          {{ item.points }}
        </div>
        <div class="news-title">
          <router-link :to="`item/${item.id}`">
            {{ item.title }}
          </router-link>
          <small class="link-text">
            by {{ item.time_age }} 
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['fetchedAsk'])
    // ...mapState({
    //   ask: state => state.ask
    // }),
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created(){
    this.$store.dispatch('FETCH_ASK')
  }

}
</script>

<style scope>
.news-list{
  margin: 0;
  padding: 0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.point{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>