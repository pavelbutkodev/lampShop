const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  img: {
    type: String,
    default: '',
  },
  price: {
    type: Number
  },
  total: {
    type: Number
  },
  productId: {
    type: Number
  }
})

module.exports = mongoose.model('products', productSchema);