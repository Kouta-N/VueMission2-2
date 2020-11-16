
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
        v-model="getGender">
        <label for="manLabel">男性</label>        
        <input 
        type="radio" 
        id="womanId" 
        value="女性"
        v-model="getGender">
        <label for="womanLabel">女性</label>
      </p>
      {{inputGender(getGender)}}
   <p>-生年月日-</p>
      <span>
      <select v-model="getYear">
        <option v-for="year in maxYear" :key="year" :value="year">{{ returnYear(year) }}
        </option>
      </select>
      年
      </span>
      {{inputYear(getYear)}}
      <span>
      <select v-model="getMonth">
        <option v-for="month in 12" :key="month" :value="month">{{ month }}</option>
      </select>
      月
      </span>
      {{inputMonth(getMonth)}}
      <span>
      <select v-model="getDay">
        <option v-for="day in returnDay(getMonth)" :key="day" :value="day">{{ day }}</option>
      </select>
      日
      </span>
      <br><br>
      {{inputDay(getDay)}}
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
        getGender: '',
        getYear: '',
        birthYear: '',
        getMonth: '',
        getDay: '',
        year: 1925,//何年から生年月日を表示するかを表す変数
        maxYear: 83,//何年まで生年月日を表示するかを表す変数
        syowa: 64,//昭和の区切り年数
        month: 1,
        day: 1,
      }
    },
    methods: {
      inputGender(gen){
        this.$store.state.gender = gen;
      },
      returnYear(age){
         if(age < this.syowa){
          return age + this.year + ' 昭和(' + age + ')' ;
        }else{
         return age + this.year + ' 平成(' + (age - this.syowa+1) + ')';
        } 
      },
      inputYear(age){
          this.$store.state.yearText = age + this.year 
      },
      inputMonth(monthNum){
        this.$store.state.monthText = monthNum;
      },
      returnDay(monthNum){
          if(monthNum === 2 || monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11){
            return 30;
          }else{
            return 31;
          }
      },
      inputDay(dayNum){
        this.$store.state.dayText = dayNum;
      },
    }
};

</script>
