<template>
    <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <div class="point">
          {{ item.points || 0}}
        </div>
        <div class="news-title">
          <template v-if="item.domain">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>
          <small class="link-text">
             by {{ item.time_age }} 
          <router-link 
            v-if="item.user" :to="`/user/${item.user}`" class="link-text">{{ item.user }}
          </router-link>
          <a :href="item.url" v-else>
            {{ item.domain }}
          </a>
      </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems(){
      return this.$store.state.list;
    //   const name = this.$route.name;
    //   if(name === "news"){
    //     return this.$store.state.news;
    //   }else if(name === "ask"){
    //     return this.$store.state.ask;
    //   }else{
    //     return this.$store.state.jobs;
    // }
    }
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