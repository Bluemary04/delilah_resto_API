const pool = require('../../config/database')
const user_controller = require('./user_controller')


module.exports = {
    create: async (data, callback) => {
        const connection = await pool.connection()
        try {
            const results= connection.query(
                `insert into users(user_name, lastname, mail, phone, address, pass, admin) 
                         values(?,?,?,?,?,?,?)`,
                 [
                     data.user_name,
                     data.lastname,
                     data.mail,
                     data.phone,
                     data.address,
                     data.pass,
                     data.admin
                 ])
                 return callback(null, results)
        } catch (error) {
            return callback (error)
        }
    },
    getUsers: async( callback) => {
        const connection = await pool.connection()
        try {
           const results = await connection.query(
            `select user_id, user_name, lastname, mail, phone, address, pass, admin from users`,
            []) 
            return callback(null, results)
        } catch (error) {
            return callback(error)
        }
    },
    getUserById: async (user_id, callback) => {
        const connection = await pool.connection()
        try {
            const results = await connection.query(
                `select user_id, user_name, lastname, mail, phone, address from users where user_id = ?`,
                [user_id])
                return callback(null, results[0])
        } catch (error) {
            return callback(error)
        }
    },
    updateUser: async(data, callback) => {
        const connection = await pool.connection()
        try {
            const results = await connection.query(
                `update users set user_name=?, lastname=?, mail=?, phone=?, address=?, pass=? where user_id= ? `,
                [
                    data.user_name,
                    data.lastname,
                    data.mail,
                    data.phone,
                    data.address,
                    data.pass,
                    data.user_id
                ])
                return callback(null, results)
        } catch (error) {
            return callback(error)
        }
    },
    deleteUser: async(user_id, callback) => {
        const connection = await pool.connection()
        try {
            const results= await  connection.query(
                `delete from users where user_id =?`,
                [user_id])
                return callback(null, results[0])
        } catch (error) {
            return callback(error)
        }
    },
    getUserByMail: async (mail, callback) => {
        const connection = await pool.connection()
        try {
            const results= await connection.query(
                `select * from users where mail= ?`,
                [mail])
            return callback(null, results)
        } catch (error) {
            return callback(error)
        } finally {
            await connection.release();
          }
    }
}