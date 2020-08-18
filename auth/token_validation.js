const { verify } = require('jsonwebtoken')

module.exports = {
    isAdmin: (req, res, next) => {

        let token = req.get('authorization')
        if (token) {
            console.log('it´s working')
            token= token.slice(7)
            verify(token, 'qwe1234', (err, decodedObject) => {
                if(err) {
                    res.status(400).json({
                        success: 0,
                        message: 'Insufficient permission'
                    })
                } 
                if(decodedObject.result[0].admin) {
                    next()
                } else {
                    res.status(400).json({
                        success: 0,
                        message: 'Access denied! Unauthorized user'
                    })
                }
            })
        } else {
            res.status(400).json({
                success: 0,
                message: 'Access denied! Unauthorized user'
            })
        }
    },

    getPermission: (req, res, next) => {

        let token = req.get('authorization')
        let userId = req.body.user_id
        if (token) {
            console.log('it´s working')
            token= token.slice(7)
            verify(token, 'qwe1234', (err, decodedObject) => {
                if(err) {
                    res.status(400).json({
                        success: 0,
                        message: 'Insufficient permission'
                    })
                } 
                if(decodedObject.result[0].admin || decodedObject.result[0].user_id === userId) {
                    next()
                } else {
                    res.status(400).json({
                        success: 0,
                        message: 'Access denied! Unauthorized user'
                    })
                }
            })
        } else {
            res.status(400).json({
                success: 0,
                message: 'Access denied! Unauthorized user'
            })
        }
    },
       
    checkToken: (req, res,next) => {
        let token = req.get('authorization')
        if (token) {
            token= token.slice(7)
            verify(token, 'qwe1234', (err, decodedObject) => {
                if(err) {
                    res.status(401).json({
                        success: 0,
                        message: 'Invalid token'
                    })
                } else {
                    next()
                }
            })
        } else {
            res.status(400).json({
                success: 0,
                message: 'Access denied! Unauthorized user'
            })
        }
    }
}