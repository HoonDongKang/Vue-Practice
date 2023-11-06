import bus from "../utils/bus";

export default {
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(()=>{
          console.log('fetced')
          bus.$emit('end:spinner');
        })
        .catch((err)=>{
          console.error(err);
        })
    }, 3000);
  },
}