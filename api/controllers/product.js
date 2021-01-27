const Product = require('../models/Product')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (e) {
    res.status(400).json({
      message: 'error'
    })
  }
}

module.exports.getById = async (req, res) => {
  try {
    const product = await Product.findOne({_id: req.params.id})
    res.status(200).json(product)
  } catch (e) {
    res.status(400).json({
      message: "error"
    })
  }
}

module.exports.create = async (req, res) => {
  try {
    const product = new Product({
      img: req.file ? req.file.path : '',
      name: req.body.name,
      price: req.body.price,
      total: req.body.total,
      productId: req.body.productId,
      about: req.body.about,
    })
    await product.save()
    res.status(201).json(product)
  } catch (e) {
    errorHandler(res, e);
  }
}