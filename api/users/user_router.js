const { createUser, getUserById, getUsers, updateUser, deleteUser, login } = require('./user_controller')
//const { Router } = require('express')
const router = require('express').Router()
const { isAdmin, getPermission, checkToken } = require('../../auth/token_validation')

router.post('/', createUser)
router.get('/', checkToken, isAdmin, getUsers)
router.get('/:id', checkToken, getPermission, getUserById)
router.patch('/', checkToken, updateUser)
router.delete('/:id', checkToken, deleteUser)
router.post('/login', login )

module.exports = router