<template>
  <div id="app">
    <div class='terminal'>
      <div class="header"></div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      oper: {
        mtc: {
          name: 'mtc', title: 'МТС', id: 'mtc'
        },
        megafon: {
          name: 'megafon', title: 'Мегафон', id: 'megafon'
        },
        beeline: {
          name: 'beeline', title: 'Билайн', id: 'beeline'
        }
      },
      itemOper: null,
      arrNumber: [],
      lenNumber: 10,
      pres: 0.05,
      minSum: 1,
      maxSum: 100
    }
  },
  methods: {
    setOperator (name) {
      this.itemOper = this.$data.oper[name]
    }
  }
}
</script>
<style scoped lang='scss'>
@import 'sass/default.scss';
@import 'sass/app.scss';
</style>
