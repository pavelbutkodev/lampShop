const Cart = require('../models/Cart')
const Product = require('../models/Product')
const errorHandler = require('../utils/errorHandler')

//getAll
module.exports.getAll = async (req, res) => {
  try {
    const carts = await Cart.find({user: req.user.id})
    res.status(200).json(carts);
  } catch (e) {
    errorHandler(res, e)
  }
}

//remove
module.exports.remove = async (req, res) => {
  try {
    await Cart.deleteOne({
      productId: req.params.id,
      user: req.user.id
    })
    console.log('==========>',req.body.productId )
    const product = await Product.find({productId: req.params.id})
    const {total} =  product[0]
    const updated = {
      total: total + req.body.total,
    }
    await Product.findOneAndUpdate(
      {productId: req.body.productId},
      {$set: updated},
      {new: true}
    )
    res.status(200)
  } catch (e) {
    errorHandler(res, e)
  }
}

//create
module.exports.createElem = async (req, res) => {
  try {
    const product = await Product.find({productId: req.body.productId})
    const {name, price, productId, img} = product[0]
    const cart = new Cart({
      name,
      price,
      productId,
      img,
      user: req.user.id,
      total: req.body.total,
    })
    const {total} =  product[0]
    const updated = {
      total: total - req.body.total,
    }
    await Product.findOneAndUpdate(
      {productId: req.body.productId},
      {$set: updated},
      {new: true}
    )
    await cart.save();
    res.status(201).json(cart)
  } catch (e) {
    errorHandler(res, e);
  }
}

//checkOut
module.exports.checkOut = async (req, res) => {
  try {
    await Cart.remove({user: req.user.id})
    res.status(201).json({
      message: 'Корзина очищена'
    })
  } catch (e) {
    errorHandler(res, e)
  }
}