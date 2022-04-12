const { read } = require('../utils/FS')
const { sign, verify } = require('jsonwebtoken')

const verifyRole = (req, res, next) => {
    const { name, password } = req.body

    if(!name || !password) {
        return res.status(400).json({
            message: 'enter valid credentials'
        })
    }
    const foundUser = read('users.json').find(e => e.name == name && e.password == password)

    if(!foundUser) {
        return res.status(401).send('you not found')
    }
    req.body.token = sign({ id: foundUser.id, role: foundUser.role }, 'fasdfagtsfdfv')
    req.body.role = foundUser.role
    

    next()
}

const verifyAccess = (req, res, next) => {
    try {
        const { token } = req.cookies

        if(!token) {
            res.status(401).redirect('/')
        }

        const user = verify(token, 'fasdfagtsfdfv')
        req.body.id = user.id

        if(!user) {
            res.status(401).redirect('/')
        }
    }catch(err) {
        res.status(500)
    }

    next()
}

module.exports = {
    verifyRole,
    verifyAccess
}