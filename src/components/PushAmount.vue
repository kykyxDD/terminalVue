<template>
  <div>
    <div class="">
      Оплата прошла успешно
    </div>
    <div>
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
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/default.scss';
@import '../sass/pushAmount.scss';
</style>
