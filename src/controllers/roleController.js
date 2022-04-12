const { read } = require('../utils/FS')

const allCourses = read('courses.json')
const allGroups = read('groups.json')
const allUsers = read('users.json')
const filterTeacher = allUsers.filter(e=> e.role == 'teacher').map(e=> allCourses.map(m=> m.id == e.course? e.course = m.name: e)? e : null)
const filterGroups = allGroups.filter(e => e.teacher == false)
const filterStudents = allUsers.filter(e=> e.role == 'student') 


const admin = (req, res) => {
    res.render('admin', data = {
        courses: allCourses,
        groups: allGroups,
        teachers: filterTeacher,
        filterGroups,
        filterStudents
    })
}

const teacher = (req, res) => {
    const { id } = req.body
    const findUser = filterTeacher.find(e=> e.id == id)
    res.render('teacher', data = {
        courses: findUser.course,
        filterStudents
    })
}
const student = (req, res) => {
    res.render('student', data = {
        filterStudents
    })
}

module.exports = {
    admin,
    teacher,
    student
}