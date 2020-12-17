<template>
  <div class="table-body">
    <div class="table-body__name">{{ product.name }}</div>
    <div class="table-body__amount">
      <input type="number" class="table-body__input" v-model="item.amount"> шт
    </div>
    <div class="table-body__price">{{ price | round }} руб</div>
    <div class="table-body__action">
      <button @click="removeItemCart(item.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import filters from '@/mixins/filters';

export default {
  name: 'CartItem',
  mixins: [
    filters,
  ],
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    removeItemCart(itemId) {
      this.$store.dispatch('removeItemCart', itemId);
    },
  },
  computed: {
    ...mapGetters([
      'products',
      'currency',
    ]),
    product() {
      return this.products.find((item) => item.T === this.item.id);
    },
    price() {
      return this.product.C * this.currency * this.item.amount;
    },
  },
};
</script>

<style lang='scss' scoped>
.table-body{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding: 5px 15px;
}

.table-body__name{
  flex-grow: 1;
}

.table-body__amount{
  flex: 0 0 300px;
}

.table-body__input{
  width: 50px;
}

.table-body__price{
  flex: 0 0 150px;
}

.table-body__action{
  flex: 0 0 100px;
  text-align: right;
}
</style>
