<template>
  <div class="admin-home">
    <h1 class="admin">Dashboard</h1>

    <PanelCart :panel="panel" v-for="panel in panels" :key="panel.id" />
  </div>
</template>

<script>
import PanelCart from '@/components/General/Admin/PanelCart.vue';

export default {
  name: "AdminHome",
  components: {
    PanelCart,
  },
  data() {
    return {
      panels: [
        {
          id: 1,
          upsdowns: 12,
          icon: 'shopping-cart',
          title: 'New Orders',
          value: 16,
        },
        {
          id: 2,
          upsdowns: -7,
          icon: 'shopping-cart',
          title: 'New Orders',
          value: 16,
        },
        {
          id: 3,
          upsdowns: 12,
          icon: 'shopping-cart',
          title: 'New Orders',
          value: 16,
        },
      ],
    };
  }
}
</script>
