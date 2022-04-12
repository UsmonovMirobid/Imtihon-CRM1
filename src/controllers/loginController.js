const login = (req, res) => {
    res.render('index')
}

const loginData = (req, res) => {
    const { role, token } = req.body
    
    if(role == 'admin') {

        res.cookie('token', token)
        res.redirect('/admin')

    }else if(role == 'teacher') {

        res.cookie('token', token)
        res.redirect('/teacher')

    }else if(role == 'student') {

        res.cookie('token', token)
        res.redirect('/student')

    }else {
        res.send('user not found')
    }
}



module.exports = {
    login,
    loginData
}