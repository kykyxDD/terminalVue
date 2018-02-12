<template>
  <div class='d-flex flex-column cont-terminal'>
    <div class='mt-auto mb-auto'>
      <div class="title">
        Введите сумму
      </div>
      <div class='d-flex justify-content-around flex-reverse flex-md-column-reverse'>
        <div>
          <div v-if='pres > 0'>Процент за снятие: {{ pres*100 }}%</div>
          <div>Минимальная сумма: {{minSum}}</div>
          <div>Максимальная сумма: {{maxSum}}</div>
        </div >
        <div >
          <div class='cont-input'>
            <input type="text"  v-model='sumAmount' v-on:input="checkSum($event.target.value)"/><br>
          </div>
          <div v-if='sumAmount>0'>
            <span>{{sumAmount}}</span>
              - 
            <span>{{(sumAmount - sumFinish).toFixed(2)}}</span> 
              = 
            <span>{{sumFinish}}</span> 
          </div>
        </div>
      </div>
    </div>
    <div class='footer '>
      <div class='cont-footer  w-100'>
        <router-link :to="'/enterNumber/'+ $route.params.name"  class='btn btn-back'>Назад</router-link>
        <router-link to="/" class='btn btn-menu ml-auto mr-auto'>Главная</router-link>
        <router-link to="/pushAmount"  class='btn btn-next-page' :class='{disabled: sumFinish < minSum }'>Оплатить</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterAmount',
  data () {
    return {
      sumAmount: 1.00,
      sumFinish: 1.00,
      pres: this.$parent.$options.data().pres,
      minSum: this.$parent.$options.data().minSum,
      maxSum: this.$parent.$options.data().maxSum
    }
  },
  methods: {
    checkSum (event) {
      console.log(this.sumAmount)
      var num  = this.sumAmount.replace(/^([^\.]*\.)|\./g, '$1' )
      num = (+num.replace(/[^0-9.]/gi, '')).toFixed(2)

      var min = Math.max(num, this.minSum)

      this.sumAmount = Math.min(min, this.maxSum)

      var pr = this.pres
      this.sumFinish = (this.sumAmount - (this.sumAmount * pr)).toFixed(2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/default.scss';
@import '../sass/enterAmount.scss';
</style>
