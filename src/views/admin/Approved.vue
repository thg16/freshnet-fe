<template>
  <div class="admin-approved">
    <h1 class="admin">Approved</h1>

    <div class="row pre-table">
      <div class="col-auto">
        <input type="text" class="pre-table-search" placeholder="Search your approved sellers...">
        <button class="pre-table-search-button">
          <font-awesome-icon class="user-icon" icon="search" />
        </button>
      </div>
      <div class="col-auto"></div>
    </div>

    <CustomTable :headers="headers" :content="content" />
  </div>
</template>

<script>
import CustomTable from '@/components/General/Admin/CustomTable.vue';

export default {
  components: { CustomTable },
  name: "AdminApproved",
  data() {
    return {
      headers: [
        {
          id: 'sku',
          label: 'SKU'
        },
        {
          id: 'approved-name',
          label: 'Seller Name',
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
          'approved-name': 'Seller Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        },
        {
          'sku': 'SKU',
          'approved-name': 'Seller Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        },
        {
          'sku': 'SKU',
          'approved-name': 'Seller Name',
          'category': 'Category',
          'sub-category': 'Sub Category',
          'price': 'Price',
          'more': 'More',
        },
        {
          'sku': 'SKU',
          'approved-name': 'Seller Name',
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
