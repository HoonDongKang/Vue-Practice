<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" :key="item.id" class="post">
        <div class="point">
          {{ item.points }}
        </div>
        <div class="news-title">
          <a :href="item.url">
            {{ item.title }}
          </a>
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
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}

</style>