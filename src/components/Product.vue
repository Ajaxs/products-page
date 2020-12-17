<template>
  <div class="product">
    <div class="product__title">
      {{ product.name }}
      ({{ amount }})
    </div>
    <div class="product__price">
      {{ price | round }} руб
      <button
        class="product__button"
        :disabled="amount === 0"
        @click="addItemCart(product.T)"
      >В корзину</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import filters from '@/mixins/filters';

export default {
  name: 'Item',
  mixins: [
    filters,
  ],
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    addItemCart(productId) {
      this.$store.dispatch('addItemCart', productId);
    },
  },
  computed: {
    ...mapGetters([
      'currency',
      'cart',
    ]),
    amount() {
      const cartItem = this.cart.find((item) => item.id === this.product.T);
      const itemAmount = cartItem ? cartItem.amount : 0;
      return this.product.P - itemAmount;
    },
    price() {
      return this.product.C * this.currency;
    },
  },
};
</script>

<style lang='scss' scoped>
.product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  &:not(:last-child){
    border-bottom: 1px solid #ccc;
  }
}

.product__button {
  margin-left: 20px;
}
</style>
