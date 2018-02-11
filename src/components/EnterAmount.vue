<template>
  <div class='d-flex flex-column cont-terminal'>
    <div class='mt-auto mb-auto'>
      <div class="">
        Введите сумму
      </div>
      <div>
        <input type="text"  v-model='sumAmount' v-on:input="checkSum($event.target.value)"/><br>
        <span>{{sumFinish}}</span>
      </div>
    </div>
    
    <div class='footer '>
      <div class='cont-footer d-flex justify-content-between align-items-center w-100'>
        <router-link to="/enterAmount" class='btn btn-back'>Отмена</router-link>
        <router-link to="/pushAmount"  class='btn btn-next-page' :class='{disabled: sumFinish < minSum }'>Go enter number</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterAmount',
  data () {
    return {
      sumAmount: 0,
      sumFinish: 0,
      pres: 0.8,
      minSum: 1
    }
  },
  methods: {
    checkSum (event) {
      this.sumFinish = this.sumAmount * this.pres
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/default.scss';
@import '../sass/enterAmount.scss';
</style>
