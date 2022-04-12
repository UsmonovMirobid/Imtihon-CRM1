const express = require('express')
const app = express()
const ejs = require('ejs')
const cors = require('cors')

const path = require('path')
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname + '/views'))

const { route } = require('./routes/router')


app.use(express.static(__dirname + '/public'));
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(route)

app.listen(9000, console.log(9000))