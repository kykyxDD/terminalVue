<template>
  <div class='d-flex flex-column cont-terminal'>
    <div class='mt-auto mb-auto'>
      <div class="">
        Введите сумму
      </div>
      <div >
        <input type="number"  v-model='sumAmount' v-on:input="checkSum($event.target.value)"/><br>
        <div v-if='sumAmount>0'>
        <span>{{sumAmount}}</span> - <span>{{sumAmount - sumFinish}}</span> = <span>{{sumFinish}}</span> 
        </div>
      </div>
      <div>Процент за снятие: {{ pres*100 }}%</div>
    </div>
    
    <div class='footer '>
      <div class='cont-footer d-flex justify-content-between align-items-center w-100'>
        <router-link :to="'/enterNumber/'+ $route.params.name"  class='btn btn-back'>Отмена</router-link>
        <router-link to="/pushAmount"  class='btn btn-next-page' :class='{disabled: sumFinish < minSum }'>Go enter number</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterAmount',
  //props: ['operator'],
  data () {
    return {
      sumAmount: 0,
      sumFinish: 0,
      pres: this.$parent.$options.data().pres,
      minSum: this.$parent.$options.data().minSum
    }
  },
  methods: {
    checkSum (event) {
      var pr = this.pres
      this.sumFinish = this.sumAmount - (this.sumAmount * pr)
    }
  },
  created: function(){
    console.log(this.$parent)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/default.scss';
@import '../sass/enterAmount.scss';
</style>
