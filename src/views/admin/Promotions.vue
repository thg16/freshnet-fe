<template>
  <div class="admin-promotions">
    <h1 class="admin">Promotions</h1>

    <div class="row pre-table">
      <div class="col-auto">
        <input type="text" class="pre-table-search" placeholder="Search your promotions...">
        <button class="pre-table-search-button">
          <font-awesome-icon class="user-icon" icon="search" />
        </button>
      </div>
      <div class="col-auto"></div>
      <div class="col text-right">
        <router-link class="btn admin-btn" :to="{ name: 'Admin.Promotions' }">
          New Promotion
        </router-link>
      </div>
    </div>

    <CustomTable :headers="headers" :content="content" />
  </div>
</template>

<script>
import CustomTable from '@/components/General/Admin/CustomTable.vue';

export default {
  components: { CustomTable },
  name: "AdminPromotions",
  data() {
    return {
      headers: [
        {
          id: 'sku',
          label: 'SKU'
        },
        {
          id: 'promotion-name',
          label: 'Promotion Name',
          width: 30
        },
        {
          id: 'category',
          label: 'Category',
        },
        {
          id: 'sub-category',
          label: 'Sub Category',
        },
        {
          id: 'price',
          label: 'Price',
        },
        {
          id: 'more',
          label: 'More',
        }
      ],
      content: [
        {
          'sku': 'SKU',
          'promotion-name': 'Promotion Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        },
        {
          'sku': 'SKU',
          'promotion-name': 'Promotion Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        },
        {
          'sku': 'SKU',
          'promotion-name': 'Promotion Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        },
        {
          'sku': 'SKU',
          'promotion-name': 'Promotion Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        }
      ]
    };
  }
}
</script>
