<template>
  <div id="app">
    <div class="wrapper">
      <div class="currency" :class="direction">1$ = {{ currency }} руб</div>
      <Main />
      <Cart />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Main from './components/Main.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: {
    Main,
    Cart,
  },
  data() {
    return {
      direction: '',
    };
  },
  computed: {
    ...mapGetters([
      'currency',
    ]),
  },
  watch: {
    currency(newVal, oldVal) {
      this.direction = newVal > oldVal ? 'up' : 'down';
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 1260px;
  margin: 0 auto;
  padding-top: 20px;
}

.currency{
  display: inline-block;
  padding: 5px;
  float: right;
}

.up {
  background-color: rgb(28, 219, 108);
}

.down {
  background-color: rgb(255, 149, 149);
}
</style>
