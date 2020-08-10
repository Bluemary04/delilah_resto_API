const pool = require('../../config/database')
const user_controller = require('./user_controller')


module.exports = {
    create: (data, callback) => {
        pool.query(
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
             ],
             (error, results, fields) => {
                 if (error) {
                    return callback (error)
                 }
                 return callback(null, results)
             }
        )
    },
    getUsers: ( callback) => {

        pool.query(
            `select user_id, user_name, lastname, mail, phone from users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }

        )
    },
    getUserById: (user_id, callback) => {
        pool.query(
            `select user_id, user_name, lastname, mail, phone, address from users where user_id = ?`,
            [user_id],
            (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    },
    updateUser: (data, callback) => {
        pool.query(
            `update users set user_name=?, lastname=?, mail=?, phone=?, address=?, pass=? where user_id= ? `,
            [
                data.user_name,
                data.lastname,
                data.mail,
                data.phone,
                data.address,
                data.pass,
                data.user_id
            ],
            (error, results, fields) => {
                if(error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    },
    deleteUser: (user_id, callback) => {
        pool.query(
            `delete from users where user_id =?`,
            [user_id],
            (error, results, fields) => {
                if(error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    },
    getUserByMail: (mail, callback) => {
        pool.query(
            `select * from users where mail= ?`,
            [mail],
            (error, results, fields) => {
                if(error) {
                    return callback(error)
                }
                return callback(null, results[0])
            }
        )
    }
}
