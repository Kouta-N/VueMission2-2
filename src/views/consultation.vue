<template>
  <div>
<!-- form3 -->
      <pre>STEP3</pre>
      <p style="text-align: center;">ご相談内容をご記入ください</p>
      <label for="consul">-ご相談内容-</label><br>
      <textarea 
      id="consul" 
      cols="80"
      rows="20" 
      :value="customerMessage" 
      @input="updateMessage"></textarea>
   <nav>
      <button> 
        <router-link to="/checkDisp">次へ進む ></router-link>
      </button>&emsp;
      <button> 
        <router-link to="/insurance">前へ戻る ></router-link>> 
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    customerMessage(){
      return  this.$store.getters.customerMessage;
    }
  },
  methods: {
    updateMessage(e){
        this.$store.dispatch("updateMessage", e.target.value);
    }
  },
};
</script>