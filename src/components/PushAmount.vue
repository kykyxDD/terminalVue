<template>
  <div v-bind:class="{ load: loadData }" class='d-flex flex-column cont-terminal'>
    <div class='mt-auto mb-auto'>
      <div class="">
        <div v-if='loadData'>
          <div class=''>
            Ожидание результата. Подождите немного
          </div>
        </div>
        <div v-else>
          {{resultData == true ? 'Оплата прошла успешно' : 'Произошла ошибка. Обратитель к оператору'}}
        </div>
      </div>
    
    </div>
    <div class='footer d-flex'>
      <router-link to="/" class='btn btn-back'>Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PushAmount',
  data () {
    return {
      loadData: false,
      resultData: false
    }
  },
  methods: {
    getResult: function() {

    }
  },
  created: function(){
    var self= this;
    this.loadData = true;
    setTimeout(function(){
      self.loadData = false;
      var ran = Math.random()
      var val = Math.round(ran)

      self.resultData = Boolean(val);
      console.log(self.resultData, val, ran)
    },2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/default.scss';
@import '../sass/pushAmount.scss';
</style>
