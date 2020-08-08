const { createProduct, getProductById, getProducts, updateProduct, deleteProduct } = require ('./products_controller')

const router = require('express').Router()
const { isAdmin, checkToken } = require('../../auth/token_validation')

router.post('/', checkToken, isAdmin, createProduct)
router.get('/', checkToken, getProducts)
router.get('/:id', checkToken, getProductById)
router.patch('/', checkToken, isAdmin, updateProduct)
router.delete('/', checkToken, isAdmin, deleteProduct)

module.exports = router