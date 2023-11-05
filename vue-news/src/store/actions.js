import { fetchUserInfo, fetchItemInfo, fetchList } from '../api'
export default{
  FETCH_USER({ commit }, name){
    fetchUserInfo(name)
      .then(res => {
        commit('SET_USER', res.data);
      })
      .catch(err => console.error(err))
  },
  FETCH_ITEM({ commit }, id){
    fetchItemInfo(id)
      .then(res => {
        commit('SET_ITEM', res.data);
      })
      .catch(err => console.error(err));
  },
  FETCH_LIST({ commit }, pageName){
    fetchList(pageName)
      .then(res => {
        commit('SET_LIST', res.data);
      })
      .catch(err => console.error(err));
  }
}