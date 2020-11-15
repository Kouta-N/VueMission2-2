import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //form1
    gender: '',
    yearText: '',
    monthText: '',
    dayText: '',
    //form2
    insuranceText: '',
    insuranceTextThreemonthes: '',
    iinsuranceValueFiveyears: '',
    //form3
    customerMessage: '',
  },
  getters:{
    gender: state => state.gender, 
    customerMessage: state => state.customerMessage
  },
  mutations:{
    updateGender(state, getGender){
      state.gender = getGender;
    },
    updateMessage(state, newMessage){
        state.customerMessage = newMessage;
    },
  },
  actions: {
    updateGender({commit}, getGender){
      commit("updateGender", getGender);
    },
    updateMessage({commit}, newMessage){
      commit("updateMessage", newMessage);
    },
  },   
})
