<template>
  <div v-bind:class="{ load: loadData, result_true: !loadData &&  resultData, result_false: !loadData && !resultData }" class='d-flex flex-column cont-terminal'>
    <div class='mt-auto mb-auto'>
      <div class="">
        <div class='cont-icon'>
          <div class='preload'>
            <div class='circle'>
            </div>
          </div>
        </div>
        <div class='cont-result'>
          <div v-if='loadData'>
            Ожидание результата. Подождите немного
          </div>
          <div v-else>
            {{resultData == true ? 'Оплата прошла успешно' : 'Произошла ошибка. Обратитель к оператору'}}
          </div>
        </div>
      </div>
    
    </div>
    <div class='footer d-flex'>
      <div class='cont-footer '>
      <router-link to="/" class='btn btn-menu ml-auto mr-auto'>Главная</router-link>
      </div>
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
  created: function(){
    var self= this;
    this.loadData = true;
    setTimeout(function(){
      self.loadData = false;
      var ran = Math.random()
      var val = Math.round(ran)

      self.resultData = Boolean(val)
    }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/default.scss';
@import '../sass/pushAmount.scss';
</style>
