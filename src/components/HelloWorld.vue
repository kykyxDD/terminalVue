<template>
  <div class="hello d-flex flex-column cont-terminal">
    <div class='mt-auto mb-auto'>
      <div class='list-operator ml-auto mr-auto' >
        <div class='itm-operator' v-for="(todo, index) in oper" :key='index'>
          <router-link :to="'/enterNumber/' + todo.name" class='link-operator'>
          <div class='icon-operator' v-bind:class="todo.id">
          </div>
          {{todo.title}}
          </router-link>
        </div>
      </div>
    </div>
    <div class="footer d-flex justify-content-between align-items-center">
      <div class='btn-menu btn ml-auto mr-auto  '>Mеню</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      oper: this.$parent.$options.data().oper
    }
  },
  created: function() {
    console.log(this.$parent.$options.data,this.$parent)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../sass/default.scss';
@import '../sass/app.scss';
</style>
