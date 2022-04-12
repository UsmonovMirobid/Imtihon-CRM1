const { read, write } = require('../utils/FS')

const addGroup = (req, res) => {
    const { name, courseId } = req.body
    const allGroups = read('groups.json')

    allGroups.push({ id: allGroups.length + 1, name, course: courseId, teacher: false, students: [] })
    write('groups.json', allGroups)

    res.redirect('/admin')
}

const removeGroup = (req, res) => {
    const { id } = req.body
    const filterGroup = read('groups.json').filter(e=> !(e.name == id))

    write('groups.json', filterGroup)

    res.redirect('/admin')
}

const toGroup = (req, res) =>{
    const { name } = req.body

    const foundGroup = read('groups.json').find(e=> e.name == name)

    console.log(foundGroup);
    res.redirect('/teacher')
}

module.exports = {
    addGroup,
    removeGroup,
    toGroup
}