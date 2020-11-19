
<template>
  <div>
<!-- form1 -->
  <pre>STEP1</pre>
  <p>お客様の情報を入力してください</p>
  <p>-性別-</p>
      <p>
        <input 
        type="radio" 
        id="manId" 
        value="男性"
        v-model="genderText">
        <label for="manLabel">男性</label>        
        <input 
        type="radio" 
        id="womanId" 
        value="女性"
        v-model="genderText">
        <label for="womanLabel">女性</label>
      </p>
   <p>-生年月日-</p>
      <span>
      <select v-model="yearText">
        <option v-for="year in maxYear" :key="year" :value="year+1925">{{ returnYear(year) }}
        </option>
      </select>
      年
      </span>
      <span>
      <select v-model="monthText">
        <option v-for="month in 12" :key="month" :value="month">{{ month }}</option>
      </select>
      月
      </span>
      <span>
      <select v-model="dayText">
        <option v-for="day in returnDay(monthText)" :key="day" :value="day">{{ day }}</option>
      </select>
      日
      </span>
      <br><br>
      <nav>
        <button> 
          <router-link to="/insurance">次へ進む ></router-link>> 
        </button>
      </nav>
</div>
</template>
 
<script>
export default {
    data: function () {
      return {
        startYear: 1925, //何年から生年月日を表示するかを表す変数
        maxYear: 83, //何年まで生年月日を表示するかを表す変数
        syowa: 64, //昭和の区切り年数
        month: 1,
        day: 1,
      }
    },
  computed: {
       genderText: {
            get(){
              return this.$store.state.genderText;
            },
            set(value) {
            this.$store.commit("updateGenderText", value);
            },
       },
       yearText: {
            get(){
              return this.$store.state.yearText;
            },
            set(value) {
            this.$store.commit("updateYearText", value);
            },
       },
       monthText: {
            get(){
              return this.$store.state.monthText;
            },
            set(value) {
            this.$store.commit("updateMonthText", value);
       },
     },
      dayText: {
            get(){
              return this.$store.state.dayText;
            },
            set(value) {
            this.$store.commit("updateDayText", value);
            }
      },
   },
    methods: {
      returnYear(age){
         if(age < this.syowa){
          return age + this.startYear + ' 昭和(' + age + ')' ;
        }else{
         return age + this.startYear + ' 平成(' + (age - this.syowa+1) + ')';
        } 
      },
      returnDay(monthNum){
          if(monthNum === 2 || monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11){
            return 30;
          }else{
            return 31;
          }
      },
    },
};

</script>
