<template>
  <div>
    <p>-性別-</p>
    {{ this.$store.state.gender }}
    <p>-生年月日-</p>
    {{ this.$store.state.yearText }}年{{ this.$store.state.monthText }}月{{ this.$store.state.dayText }}日
    <p>-現在、生命保険に加入されていますか？-</p>
    {{ this.$store.state.insuranceText }}
    <p>-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
    {{ this.$store.state.insuranceTextThreemonthes }}
    <p>-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
     {{ this.$store.state.insuranceTextFiveyears }}
    <p>-ご相談内容-</p>
     {{ this.$store.state.customerMessage }}
     <nav>
      <br>
      <button> 
        次へ進む >
      </button>&emsp;
      <button> 
        <router-link to="/consultation">前へ戻る ></router-link>> 
      </button>
    </nav>
  </div>
</template>
 

