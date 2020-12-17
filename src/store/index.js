import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/assets/data/data.json';
import groups from '@/assets/data/names.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    groups: {},
    cart: [],
    currency: 70,
  },
  mutations: {
    updateProducts(state, payload) {
      state.products = payload;
    },
    updateGroups(state, payload) {
      state.groups = payload;
    },
    addItemCart(state, productId) {
      const product = state.cart.find((item) => item.id === productId);

      if (product) {
        product.amount += 1;
      } else {
        state.cart.push({
          id: productId,
          amount: 1,
        });
      }
    },
    updateCurrency(state, currency) {
      state.currency = currency;
    },
    removeItemCart(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
  actions: {
    init({ commit }) {
      const productsArr = products.Value.Goods;
      const groupsName = [];

      /* Преобразуем исходные данные к массиву */
      Object.entries(groups).forEach(([groupId, group]) => {
        groupsName.push({
          id: Number(groupId),
          name: group.G,
        });

        Object.entries(group.B).forEach(([productId, product]) => {
          const index = productsArr.findIndex((item) => item.T === Number(productId));

          if (index >= 0) {
            productsArr[index].name = product.N;
          }
        });
      });

      commit('updateProducts', productsArr);
      commit('updateGroups', groupsName);
    },
    addItemCart({ commit }, productId) {
      commit('addItemCart', productId);
    },
    updateCurrency({ commit }, currency) {
      commit('updateCurrency', currency);
    },
    removeItemCart({ commit }, id) {
      commit('removeItemCart', id);
    },
  },
  getters: {
    products: (state) => state.products,
    groups: (state) => state.groups,
    cart: (state) => state.cart,
    currency: (state) => state.currency,
    total: (state) => state.cart.reduce((sum, item) => {
      const product = state.products.find((val) => val.T === item.id);
      return sum + product.C * item.amount * state.currency;
    }, 0),
  },
});
