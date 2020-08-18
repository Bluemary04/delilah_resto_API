const pool = require('../../config/database')
const orders_controller = require('./orders_controller');
const { connection } = require('../../config/database');




module.exports = {
    createOrder: async (data, callback) => {
            const connection = await pool.connection();
            try {
              console.log("at querySignUp...");
              await connection.query("START TRANSACTION");
              await connection.query(`INSERT INTO orders(order_state, payment, date_time, id_user) VALUES(?,?,now(),?)`, [data.order_state, data.payment, data.id_user]);
              await connection.query(`SET @order_id = LAST_INSERT_ID();`);
              let productos = data.id_product;
                for (let producto of productos) {
                console.log(producto);
                await connection.query(`INSERT INTO order_detail(id_order, id_product, quantity) VALUES (@order_id,?,?)`, [producto, data.quantity]);
              };
              const results = await connection.query("COMMIT");
              return callback(null, results)
            } catch (error) {
              await connection.query("ROLLBACK");
              console.log('ROLLBACK', error);
              return callback(error)
            } finally {
              await connection.release();
            }

           
    },
    getOrders: async (callback) => {
        const connection = await pool.connection()
        try {
            const results= await connection.query( 
                `select o.order_state, o.date_time, o.order_id, o.payment,d.quantity, p.product_name, p.price, p.description, u.user_name, u.mail, u.address, u.phone from orders as o   
                     inner join order_detail as d on o.order_id = d.id_order 
                     inner join products as p on d.id_product = p.product_id
                     inner join users as u on o.id_user = u.user_id`,
                [])
                return callback(null, results)
        } catch (error) {
            return callback(error)
        } finally {
            await connection.release();
        }
            
    },
    getOrderById: async (id, callback) => {
        const connection = await pool.connection()
        try {
            const results = await connection.query(
                `select o.order_state, o.date_time, o.order_id, o.payment,d.quantity, p.product_name, p.price, p.description, u.user_name, u.mail, u.address, u.phone from orders as o   
                inner join order_detail as d on o.order_id = d.id_order 
                inner join products as p on d.id_product = p.product_id
                inner join users as u on o.id_user = u.user_id where order_id = ?`,
                [id])
                return callback(null, results)
        } catch (error) {
            return callback(error)
        }
    },
    updateOrder: async (data, callback) => {
        const connection = await pool.connection()
        try {
            const results= await connection.query(
                `update orders set order_state=?, payment=? where order_id=?`,
                [
                    data.order_state,
                    data.payment,
                    data.order_id
                ])
                return callback(null, results)
        } catch (error) {
            return callback(error)
        } finally {
            await connection.release();
        }
    },
    deleteOrder: async (order_id, callback) => {
        const connection = await pool.connection()
        try {
            const results = await connection.query(
                `delete from orders where order_id =?`,
                [order_id])
            return callback (null, results)
        } catch (error) {
            return callback(error)
        }
    }
}