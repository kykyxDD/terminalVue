<template>
  <div class="hello">
    <div class='list-operator' >
      <div class='itm-operator' v-for="(todo, index) in oper" :key='index'>
        <router-link :to="'/enterNumber/' + todo.name" class='btn'>Go to {{todo.name}}</router-link>
      </div>
    </div>
    <div class="footer">
      <div class='btn-menu'>Mеню</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      oper: [{
        name: 'mtc', id: 'mtc'
      }, {
        name: 'megafon', id: 'megafon'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/default.scss';
@import '../sass/app.scss';
</style>
