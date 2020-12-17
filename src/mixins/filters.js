import Vue from 'vue';

export default Vue.extend({
  filters: {
    round(value) {
      return !value ? 0 : Number(value).toFixed(2);
    },
  },
});
