const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  total: {
    type: Number
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  img: {
    type: String
  },
  productId: {
    type: Number
  },
  about: {
    type:String
  },
})

module.exports = mongoose.model('carts', cartSchema);