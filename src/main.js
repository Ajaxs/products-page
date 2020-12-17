import Vue from 'vue';
import App from './App.vue';
import store from './store';
import '@/assets/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  methods: {
    rand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
  created() {
    store.dispatch('init');
    store.dispatch('updateCurrency', this.rand(20, 80));

    setInterval(() => {
      store.dispatch('updateCurrency', this.rand(20, 80));
    }, 15000);
  },
  render: (h) => h(App),
}).$mount('#app');
