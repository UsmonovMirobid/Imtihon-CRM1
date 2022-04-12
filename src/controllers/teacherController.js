const { read, write } = require('../utils/FS')

const addTeacher = (req, res) => {
    const { name, password, courseTeacher } = req.body

    const allUsers = read('users.json')

    allUsers.push({ id: allUsers.length + 1, name, password, role: 'teacher', course: [] })
    write('users.json', allUsers)
    res.redirect('/admin')
}

const removeTeacher = (req, res) => {
    const { id } = req.body

    const filterUsers = read('users.json').filter(e=> !(e.id == id))
    const findUser = read('users.json').filter(e=> e.id == id)
    write('users.json', filterUsers)
    
    const allGroups = read('groups.json').map(e => findUser[0].course.find(m => e.name == m) ?  { id: e.id, name: e.name, course: e.course, teacher: false }  : e)

    write('groups.json', allGroups)

    res.redirect('/admin')
}

const attach = (req, res) => {
    const { teacherName, groupName } = req.body
    
    const foundUser = read('users.json').find(e=> e.name == teacherName)
    foundUser.course.push(groupName)
    
    const allUsers = read('users.json').map(e=> foundUser.id == e.id? foundUser: e)

    const allGroups = read('groups.json')
    const foundGroups = read('groups.json').filter(e=> foundUser.course.find(m=> e.name == m))
    if(foundGroups) {
        foundGroups[0].teacher = true
        const finishGroup = allGroups.map(e=> foundGroups[0].id == e.id? foundGroups[0]: e)
        write('groups.json', finishGroup)
    }else {
        foundGroups[0].teacher = false
        write('groups.json', finishGroup)
    }

    write('users.json', allUsers)
    res.redirect('/admin')
}

module.exports = {
    addTeacher,
    removeTeacher,
    attach
}