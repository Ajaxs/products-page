<template>
  <div class="group" v-if="productsByGroup.length > 0">
    <div class="group__title">{{ name }}</div>
    <div class="products">
      <Product
        v-for="product in productsByGroup"
        :key="product.T"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Product from '@/components/Product.vue';

export default {
  name: 'Group',
  components: {
    Product,
  },
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  computed: {
    ...mapGetters([
      'products',
    ]),
    productsByGroup() {
      return this.products.filter((item) => item.G === this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.group {
  border: 1px solid #aaa;
  margin-bottom: 20px;
}

.group__title {
  background: #ddd;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: 900;
}
</style>
