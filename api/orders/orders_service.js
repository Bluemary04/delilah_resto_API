const pool = require('../../config/database')
const orders_controller = require('./orders_controller')


module.exports = {
    createOrder: (data, callback) => {
        pool.query(
            `insert into orders(order_state, payment, date_time, id_user, id_product) 
                     values(?,?,now(),?,?)`,
             [
                 data.order_state,
                 data.payment,
                 data.id_user,
                 data.id_product
             ],
             (error, results, fields) => {
                 if (error) {
                    return callback (error)
                 }
                 return callback(null, results)
             }
        )
    },
    getOrders: (callback) => {
        pool.query( 
            `select o.order_state, o.date_time, o.order_id, o.payment, p.product_name, p.price, p.description, u.user_name, u.mail, u.address, u.phone from orders as o 
                 inner join products as p on o.id_product = p.product_id
                 inner join users as u on o.id_user = u.user_id`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }

        )
    },
    getOrderById: (id, callback) => {
        pool.query(
            `select o.order_state, o.date_time, o.order_id, o.payment, p.product_name, p.price, p.description, u.user_name, u.mail, u.address, u.phone from orders as o 
            inner join products as p on o.id_product = p.product_id
            inner join users as u on o.id_user = u.user_id where order_id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    },
    updateOrder: (data, callback) => {
        pool.query(
            `update orders set order_state=?, payment=? where order_id=?`,
            [
                data.order_state,
                data.payment,
                data.order_id
            ],
            (error, results, fields) => {
                if(error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },
    deleteOrder: (order_id, callback) => {
        pool.query(
            `delete from orders where order_id =?`,
            [order_id],
            (error, results, fields) => {
                if(error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    }
}
