import { fetchNewsList, fetchAskList, fetchJobsList } from '../api'
export default{
  FETCH_NEWS(context){
    fetchNewsList()
      .then(res => {
        //action -> commit to mutation
        context.commit('SET_NEWS', res.data);
        })
      .catch(err => console.error(err))
  },
  FETCH_ASK(context){
    fetchAskList()
      .then(res => {
        context.commit('SET_ASK', res.data);
        })
      .catch(err => console.error(err))
  },
  FETCH_JOBS(context){
    fetchJobsList()
      .then(res => {
        context.commit('SET_JOBS', res.data);
        })
      .catch(err => console.error(err))
  }
}