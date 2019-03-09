import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// export default const store = new Vuex.Store({
//   state:{
//     isShow: false
//   }
// })
const state = {
  isShow: false
}
export default new Vuex.Store({
  state
})
