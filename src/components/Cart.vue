<template>
  <div class="cart">
    <h2>Корзина</h2>
    <template v-if="cart.length > 0">
    <div class="table-cart">
      <div class="table-header">
        <div class="table-header__name">
          Наименование товара
        </div>
        <div class="table-header__amount">
          Количество
        </div>
        <div class="table-header__price">
          Цена
        </div>
        <div class="table-header__action"></div>
      </div>
      <CartItem
        v-for="item in cart"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="total-price">
      Общая стоимость {{ total | round }} руб
    </div>
    </template>
    <template v-else>
      <div>Нет товаров корзине</div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import filters from '@/mixins/filters';
import CartItem from '@/components/CartItem.vue';

export default {
  name: 'Cart',
  mixins: [
    filters,
  ],
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters([
      'cart',
      'products',
      'total',
    ]),
  },
};
</script>

<style lang='scss' scoped>
.cart{
  margin-bottom: 20px;
}

.table-header {
  display: flex;
  align-items: center;
  color: #aaa;
  border-bottom: 1px solid #ccc;
  padding: 10px 15px;
}

.table-header__name {
  flex-grow: 1;
}

.table-header__amount {
  flex: 0 0 300px;
}

.table-header__price {
  flex: 0 0 150px;
}

.table-header__action {
  flex: 0 0 100px;
}

.total-price {
  font-size: 16px;
  text-align: right;
  padding: 10px 15px;
}
</style>
