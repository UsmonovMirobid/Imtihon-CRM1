const express = require('express')
const route = express.Router()

const loginController = require('../controllers/loginController')
const verifyUser = require('../middlewares/verify')
const { admin, teacher, student, teacherGroup } = require('../controllers/roleController')
const { verifyAccess } = require('../middlewares/verify')
const coursesController = require('../controllers/coursesController')
const groupsController = require('../controllers/groupsController')
const teacherController = require('../controllers/teacherController')
const studentController = require('../controllers/studentController')

route
    .get('/', loginController.login)
    .post('/login', verifyUser.verifyRole, loginController.loginData)
    .get('/admin', verifyAccess, admin)
    .get('/teacher', verifyAccess, teacher)
    .get('/student', verifyAccess, student)
    .post('/addCourse', coursesController.addCourse)
    .post('/removeCourse', coursesController.removeCourse)
    .post('/addGroup', groupsController.addGroup)
    .post('/removeGroup', groupsController.removeGroup)
    .post('/addTeacher', teacherController.addTeacher)
    .post('/removeTeacher', teacherController.removeTeacher)
    .post('/attach', teacherController.attach)
    .post('/addStudent', studentController.addStudent)
    .post('/removeStudent', studentController.removeStudent)
    .post('/teacherGroup', groupsController.toGroup)
    
    
module.exports = {
    route
}