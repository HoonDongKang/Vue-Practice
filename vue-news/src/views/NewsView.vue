<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" :key="item.id" class="post">
        <div class="point">
          {{ item.points }}
        </div>
        <a :href="item.url">
          {{ item.title }}
        </a>
        <small>
          {{ item.time_age }} by 
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
      </li>
    </ul>
    <!-- <p v-for="user in this.$store.state.news" :key="user.id">
      <a :href=item.url>{{user.title}}</a>
      <small>
        {{ user.time_age }} by 
        <router-link :to="`/user/${user.user}`">{{ user.user }}</router-link>
      </small>
    </p> -->
  </div>
</template>

<script>

export default {
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>
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

</style>