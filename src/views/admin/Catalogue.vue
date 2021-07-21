<template>
  <div class="admin-catalogue">
    <h1 class="admin">Catalogue</h1>

    <div class="row pre-table">
      <div class="col-auto">
        <input type="text" class="pre-table-search" placeholder="Search your products...">
        <button class="pre-table-search-button">
          <font-awesome-icon class="user-icon" icon="search" />
        </button>
      </div>
      <div class="col-auto"></div>
      <div class="col text-right">
        <router-link class="btn admin-btn" :to="{ name: 'Admin.Catalogue' }">
          New Product
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
  name: "AdminCatalogue",
  data() {
    return {
      headers: [
        {
          id: 'sku',
          label: 'SKU'
        },
        {
          id: 'product-name',
          label: 'Product Name',
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
          'product-name': 'Product Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        },
        {
          'sku': 'SKU',
          'product-name': 'Product Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        },
        {
          'sku': 'SKU',
          'product-name': 'Product Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        },
        {
          'sku': 'SKU',
          'product-name': 'Product Name',
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
