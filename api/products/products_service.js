const pool = require('../../config/database')
const products_controller = require('./products_controller')


module.exports = {
    createProduct: (data, callback) => {
        pool.query(
            `insert into products(product_name, price, photo, description) 
                     values(?,?,?,?)`,
             [
                 data.product_name,
                 data.price,
                 data.photo,
                 data.description
             ],
             (error, results, fields) => {
                 if (error) {
                    return callback (error)
                 }
                 return callback(null, results)
             }
        )
    },
    getProducts: ( callback) => {
        pool.query(
            `select product_id, product_name, price, photo, description from products`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }

        )
    },
    getProductById: (id, callback) => {
        pool.query(
            `select product_id, product_name, price, photo, description from products where product_id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    },
    updateProduct: (data, callback) => {
        pool.query(
            `update products set product_name=?, price=?, photo=?, description=? where product_id= ? `,
            [
                data.product_name,
                data.price,
                data.photo,
                data.description,
                data.product_id
            ],
            (error, results, fields) => {
                if(error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },
    deleteProduct: (product_id, callback) => {
        pool.query(
            `delete from products where product_id =?`,
            [product_id],
            (error, results, fields) => {
                if(error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    }
}
