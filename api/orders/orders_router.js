const { createOrder, getOrderById, getOrders, updateOrder, deleteOrder } = require ('./orders_controller')

const router = require('express').Router()
const { isAdmin, getPermission, checkToken } = require('../../auth/token_validation')

router.post('/', checkToken, createOrder)
router.get('/', isAdmin, checkToken, getOrders)
router.get('/:id', checkToken, getPermission, getOrderById)
router.patch('/', checkToken, isAdmin, updateOrder)
router.delete('/:id', checkToken, isAdmin, deleteOrder)

module.exports = router
