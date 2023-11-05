export default{
  SET_NEWS(state, news){
    //mutaton -> mutate to state
    state.news = news;
  },
  SET_ASK(state, ask){
    //mutaton -> mutate to state
    state.ask = ask;
  },
  SET_JOBS(state, jobs){
    //mutaton -> mutate to state
    state.jobs = jobs;
  },
  SET_USER(state, user){
    state.user = user;
  },
  SET_ITEM(state, item){
    state.item = item;
  },
  SET_LIST(state, pageName){
    state.list = pageName;
  }
}