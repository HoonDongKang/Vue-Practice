import bus from "../utils/bus";
import ListView from "./ListView.vue"

export default function createListView(name){
  return {
    name,
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
    render(createElement) {
      return createElement(ListView);
    }
  }
}