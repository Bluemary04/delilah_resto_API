const { create, getUserById, getUsers, updateUser, deleteUser, getUserByMail } = require('./user_service')

const { genSaltSync, hashSync, compareSync, bcrypt } = require ('bcrypt')
const { sign } = require('jsonwebtoken')

module.exports = {
    createUser: (req, res) => {
        const body = req.body
        const salt = genSaltSync(10)
        body.pass = hashSync(body.pass, salt)
        create(body, (err, results) => {
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
                message: 'New user created successfully'
            })
        })
    },
    getUserById: (req, res) => {
        const user_id = req.params.id //acá cambié el id por user_id
        getUserById (user_id, (err, results) => {
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.status(400).json ({
                    success: 0,
                    message: 'User not found'
                })
            }
            return res.status(200).json ({
                success: 1,
                data: results,
                message: 'Successful operation'
            })
        }  ) 
    },
    getUsers: (req, res) => {
        getUsers ((err, results) =>{
            if (err) {
                console.log (err)
                return res.status(400).json({
                    success: 0,
                    message: 'Invalid input, object invalid'
                })
            }
                return res.status(200).json({
                    success: 1,
                    data: results,
                    message: 'Successful operation'
                })
            
        })
    },
    updateUser: (req, res) => {
        const body = req.body
        const salt = genSaltSync(10)
        body.pass = hashSync(body.pass, salt)
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(404).json({
                    success: 0,
                    message: 'User not found'
                })
            }
            if (!results) {
                return res.status(400).json( {
                    success: 0,
                    message: 'Could not update user'
                })
            }
            return res.status(201).json({
                success: 1,
                message: 'Updated successfully'
            })
        }) 
    },
    deleteUser: (req, res) => {
        const user_id = req.params.id
        deleteUser(user_id, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    success: 0,
                    message: 'Bad request'
                })
            }
            return res.status(200).json({
                success: 1,
                message: 'User deleted successfully'
            })
        })
    },
    login: async(req, res) => {
        const body = req.body
        getUserByMail(body.mail, async(err, results) => {
            if (err) {
                console.log(err)
            }
            if (!results) {
                return res.status(400).json({
                    success: 0,
                    data: 'Invalid mail or password'
                })
            }
            const result = async (results)  =>{
               const tokenInfo= compareSync( body.pass, results.pass) 
            }
            if (result) {
                results.pass= undefined
                const jsontoken = sign({ result: results}, 'qwe1234', {
                    expiresIn: '4h'
                })
                return res.status(201).json({
                    success: 1,
                    message: 'Login successful',
                    token: jsontoken
                })
            } else {
                return res.status(400).json({
                    success: 0,
                    data: 'Invalid mail or password'
                })    
            }
        })
    }
}