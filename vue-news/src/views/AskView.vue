<template>
  <list-item-vue/>
</template>

<script>
import ListItemVue from '../components/ListItem.vue'
import bus from '../utils/bus';
export default {
  components:{
    ListItemVue
  },
  created(){
      bus.$emit("start:spinner");
      this.$store.dispatch('FETCH_ASK')
        .then(()=> {
          bus.$emit("end:spinner");
        })
        .catch((err)=>{
          console.error(err);
        })
  }
}
</script>

<style>

</style>