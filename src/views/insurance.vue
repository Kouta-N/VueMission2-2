<template>
  <div>
  
<!-- form2 -->
      <p>STEP2</p>
      <p style="text-align: center;">以下にお答えください</p>

      <pre>現在、生命保険に加入されていますか？</pre>
        <input type="radio" 
        id="insuranceIdYes" 
        value="はい" 
        v-model="insurance">
        <label for="insuranceLabelYes">はい</label>
        
        <input type="radio" 
        id="insuranceIdNo" 
        value="いいえ" 
        v-model="insurance">
        <label for="insuranceLabelNo">いいえ</label>

        {{inputInsurance(insurance)}}
        {{showThreemonthesMethod()}}

      <div  v-if="showThreemonthes">

        <pre>現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</pre>
        <input type="radio" 
        id="insuranceIdYesThreemonthes" 
        value="はい" 
        v-model="Threemonthes">
        <label for="insuranceLabelYesThreemonthes">はい</label>
        
        <input type="radio" 
        id="insuranceIdNoThreemonthes" 
        value="いいえ" 
        v-model="Threemonthes">
        <label for="insuranceLabelNoThreeonth">いいえ</label>
      </div>

        {{inputInsuranceThreemonthes(Threemonthes)}}
        {{showFiveyearsMethod()}}

      <div v-if="showFiveyears">
        <pre>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</pre>
        <input type="radio" 
        id="insuranceIdYesFiveyears" 
        value="はい" 
        v-model="Fiveyears">
        <label for="insuranceLabelYesFiveyears">はい</label>
        
        <input type="radio" 
        id="insuranceIdNoFiveyears" 
        value="いいえ" 
        v-model="Fiveyears">
        <label for="insuranceLabelNoFiveyears">いいえ</label>  
      </div>

      {{inputInsuranceFiveyears(Fiveyears)}}

      <br><br>

    <nav>
      <button> 
        <router-link to="/consultation">次へ進む ></router-link>>
      </button>&emsp;

      <button> 
        <router-link to="/">前へ戻る ></router-link>> 
      </button>
    </nav>

  </div>
</template>


<script>
export default {
    data: function () {
      return {
        insurance:"",
        Threemonthes:"",
        Fiveyears:"",
        showThreemonthes:false,
        showFiveyears:false,
      }
    },

    methods: {
        showThreemonthesMethod: function () {
          if(this.insurance !== ""){
            this.showThreemonthes = true;
          }
        },

        showFiveyearsMethod: function() {
          if(this.Threemonthes !== ""){
            this.showFiveyears = true;
          }
        },

      inputInsurance(insuranceValue){
          this.$store.state.insuranceText = insuranceValue;
      },

      inputInsuranceThreemonthes(insuranceValueThreemonthes){
          this.$store.state.insuranceTextThreemonthes = insuranceValueThreemonthes;
      },

      inputInsuranceFiveyears(insuranceValueFiveyears){
          this.$store.state.insuranceTextFiveyears = insuranceValueFiveyears;
      },
    },
};
</script>
