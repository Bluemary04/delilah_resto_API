const pool = require('../../config/database')
const products_controller = require('./products_controller')


module.exports = {
    createProduct: async(data, callback) => {
        const connection = await pool.connection()
        try {
            const results = await connection.query(
                `insert into products(product_name, price, photo, description) 
                         values(?,?,?,?)`,
                 [
                     data.product_name,
                     data.price,
                     data.photo,
                     data.description
                 ])
                 return callback(null, results)
        } catch (error) {
            return callback (error)
        }
    },
    getProducts: async( callback) => {
        const connection = await pool.connection()
        try {
            const results= await connection.query(
                `select product_id, product_name, price, photo, description from products`,
                [])
                return callback(null, results)
        } catch (error) {
            return callback(error)
        }
    },
    getProductById: async(id, callback) => {
        const connection = await pool.connection()
        try {
            const results= await connection.query(
                `select product_id, product_name, price, photo, description from products where product_id = ?`,
                [id])
                return callback(null, results[0])
        } catch (error) {
            return callback(error)
        }
    },
    updateProduct: async(data, callback) => {
        const connection = await pool.connection()
        try {
            const results = await connection.query(
                `update products set product_name=?, price=?, photo=?, description=? where product_id= ? `,
                [
                    data.product_name,
                    data.price,
                    data.photo,
                    data.description,
                    data.product_id
                ])
                return callback(null, results)
        } catch (error) {
            return callback(error)
        }
    },
    deleteProduct: async(product_id, callback) => {
        const connection = await pool.connection()
        try {
            const results= await connection.query(
                `delete from products where product_id =?`,
                [product_id])
                return callback(null, results[0])
        } catch (error) {
            return callback(error)
        }
    }
}