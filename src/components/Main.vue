<template>
  <div class="products">
    <h2>Товары</h2>
    <div class="groups">
      <Group
        v-for="group in groups"
        :key="group.id"
        :id="group.id"
        :name="group.name"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Group from '@/components/Group.vue';

export default {
  name: 'products',
  components: {
    Group,
  },
  computed: {
    ...mapGetters([
      'groups',
    ]),
  },
};
</script>
