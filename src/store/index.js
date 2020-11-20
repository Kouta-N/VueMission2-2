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
    insuranceTextFiveyears: '',
    //form3
    customerMessage: '',
  },
  getters:{
    gender: state => state.gender, 
    yearText: state => state.yearText,
    monthText: state => state.monthText,
    dayText: state => state.dayText,
    insuranceText: state => state.insuranceText,
    insuranceTextThreemonthes: state => state.insuranceTextThreemonthes,
    insuranceTextFiveyears: state => state.insuranceTextFiveyears,
    customerMessage: state => state.customerMessage,
  },
  mutations:{
    //form1
    updateGenderText(state, genderText){
      state.gender = genderText;
    },
    updateYearText(state, yearText){
      state.yearText = yearText;
    },
    updateMonthText(state, monthText){
      state.monthText = monthText;
    },
    updateDayText(state, dayText){
      state.dayText = dayText;
    },
    //form2
    updateInsuranceText(state, insuranceText){
      state.insuranceText = insuranceText;
    },
    updateInsuranceTextThreemonthes(state, insuranceTextThreemonthes){
      state.insuranceTextThreemonthes = insuranceTextThreemonthes;
    },
    updateInsuranceTextFiveyears(state, insuranceTextFiveyears){
      state.insuranceTextFiveyears= insuranceTextFiveyears;
    },
    //form3
    updateMessage(state, newMessage){
      state.customerMessage = newMessage;
    },
  },
  actions: {
    updateGender({commit}, getGender){
      commit('updateGender', getGender);
    },
    updateYearText({commit}, getYeartext){
      commit('updateYearText', getYeartext);
    },
    updateMonthText({commit}
      , getMonthText){
      commit('updatemonthText', getMonthText);
    },
    updateInsuranceText({commit}, getInsuranceText){
      commit('updateInsuranceTextThreemonthes', getInsuranceText);
    },
    updateInsuranceTextThreemonthes({commit}, getInsuranceTextThreemonthes){
      commit('updateInsuranceTextThreemonthes', getInsuranceTextThreemonthes);
    },
    updateInsuranceTextFiveyears({commit}, getInsuranceTextFiveyears){
      commit('updateInsuranceTextFiveyears', getInsuranceTextFiveyears);
    },
    updateMessage({commit}, newMessage){
      commit('updateMessage', newMessage);
    },
  },   
})
