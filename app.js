require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./api/users/user_router')
const productRouter = require('./api/products/products_router')
const orderRouter = require('./api/orders/orders_router')

app.use(express.json())


app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.listen(process.env.APP_PORT, () => {
    console.log('server up and running')
})

module.exports = app




