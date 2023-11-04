<template>
  <list-item-vue/>
</template>

<script>
import ListItemVue from '../components/ListItem.vue'
import bus from "../utils/bus"

export default {
  components:{
    ListItemVue
  },
  created(){
    bus.$emit("start:spinner");
    this.$store.dispatch('FETCH_NEWS');
    bus.$emit("end:spinner");
  }
}
</script>

<style>

</style>