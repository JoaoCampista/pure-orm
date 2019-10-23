const Base = require('./base');
const Products = require('./products');

class Product extends Base {
  get BoCollection() {
    return Products;
  }

  static get tableName() {
    return 'product';
  }

  static get sqlColumnsData() {
    return [
      'id',
      'vendor_id',
      'shopify_id',
      'value',
      'label',
      'product_type',
      'created_date',
      'updated_date',
      'published_date',
      'category'
    ];
  }
}

module.exports = Product;
