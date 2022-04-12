const { read, write } = require('../utils/FS')

const addStudent = (req, res) => {
    const { name, password, addStudentGroupName } = req.body

    const allUsers = read('users.json')
    allUsers.push({ id: allUsers.length + 1, name, password, role: "student", group: addStudentGroupName })
    
    const foundGroups = read('groups.json').find(e=> e.name == addStudentGroupName)
    foundGroups.students.push(name)
    const allGroups = read('groups.json').map(e=> foundGroups.id == e.id? foundGroups: e)
    write('groups.json', allGroups)

    write('users.json', allUsers)
    res.redirect('/admin')
}

const removeStudent = (req, res) => {
    const { id } = req.body

    const foundUser = read('users.json').find(e=> e.id == id)
    console.log(foundUser);
    const allUsers = read('users.json').filter(e=> !(e.id == id))
    write('users.json', allUsers)

    res.redirect('/admin')
}

module.exports = {
    addStudent,
    removeStudent
}