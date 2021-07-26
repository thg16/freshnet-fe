<template>
  <div class="admin-promotions">
    <h1 class="admin">New Promotion</h1>

    <div class="row pre-table">
      <div class="col-auto"></div>
      <div class="col-auto"></div>
      <div class="col text-right">
        <router-link class="btn admin-btn" :to="{ name: 'Admin.Promotions' }">
          Save Promotion
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: { },
  name: "AdminPromotionsNew",
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
