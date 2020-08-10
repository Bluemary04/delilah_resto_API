const { createProduct, getProductById, getProducts, updateProduct, deleteProduct } = require('./products_service')

const { genSaltSync, hashSync, compareSync } = require ('bcrypt')
const { sign } = require('jsonwebtoken')

module.exports = {
    createProduct: (req, res) => {
        const body = req.body
        createProduct(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    success: 0,
                    message: 'invalid input, object invalid'
                })
            }
            return res.status(201).json({
                success: 1,
                data: results,
                message: 'New product created successfully'
            })
        })
    },
    getProductById: (req, res) => {
        const id = req.params.id
        getProductById (id, (err, results) => {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.status(400).json ({
                    success: 0,
                    message: 'Product not found'
                })
            }
            return res.status(200).json ({
                success: 1,
                data: results,
                message: 'Successful operation'
            })
        }  ) 
    },
    getProducts: (req, res) => {
        getProducts ((err, results) =>{
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
    updateProduct: (req, res) => {
        const body = req.body
        updateProduct(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(404).json({
                    success: 0,
                    message: 'Product not found'
                })
            }
            if (!results) {
                return res.status(400).json( {
                    success: 0,
                    message: 'Could not update product'
                })
            }
            return res.status(201).json({
                success: 1,
                message: 'Updated successfully'
            })
        }) 
    },
    deleteProduct: (req, res) => {
        const product_id = req.params.id
        deleteProduct(product_id, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    success: 0,
                    message: 'Bad request'
                })
            }
            return res.status(200).json({
                success: 1,
                message: 'Product deleted successfully'
            })
        })
    }
}
