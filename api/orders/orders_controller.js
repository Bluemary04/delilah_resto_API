const { createOrder, getOrderById, getOrders, updateOrder, deleteOrder } = require('./orders_service')

const { sign } = require('jsonwebtoken')

module.exports = {
    createOrder: (req, res) => {
        const body = req.body
        createOrder(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    success: 0,
                    message: 'Invalid input, object invalid'
                })
            }
            return res.status(201).json({
                success: 1,
                data: results,
                message: 'New order created successfully'
            })
        })
    },
    getOrderById: (req, res) => {
        const id = req.params.id
        getOrderById (id, (err, results) => {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.status(400).json ({
                    success: 0,
                    message: 'Order not found'
                })
            }
            return res.status(200).json ({
                success: 1,
                data: results,
                message: 'Successful operation'
            })
        }  ) 
    },
    getOrders: (req, res) => {
        getOrders ((err, results) =>{
            if (err) {
                console.log (err)
                return res.status(400).json({
                    success: 0,
                    message: 'Bad request'
                })
            }
                return res.status(200).json({
                    success: 1,
                    data: results,
                    message: 'Successful operation'
                })
            
        })
    },
    updateOrder: (req, res) => {
        const body = req.body
        updateOrder(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(404).json({
                    success: 0,
                    message: 'Order not found'
                })
            }
            if (!results) {
                return res.status(400).json( {
                    success: 0,
                    message: 'Could not update order'
                })
            }
            return res.status(201).json({
                success: 1,
                message: 'Updated successfully'
            })
        }) 
    },
    deleteOrder: (req, res) => {
        const data = req.body
        deleteOrder(data, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    success: 0,
                    message: 'Bad request'
                })
            }
            return res.status(200).json({
                success: 1,
                message: 'Order deleted successfully'
            })
        })
    }
}