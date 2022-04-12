const { read, write } = require('../utils/FS')

const addCourse = (req, res) =>{
    const { name } = req.body

    const allCourses = read('courses.json')
    
    allCourses.push({ id: allCourses.length + 1, name })

    write('courses.json', allCourses)
    res.redirect('/admin')
}

const removeCourse = (req, res) =>{
    const { id } = req.body

    const filterCourses = read('groups.json').filter(e=> !(e.course == id))
    write('groups.json', filterCourses)

    const removeCourse = read('courses.json').filter(e=> !(e.name == id)) 
    write('courses.json', removeCourse)
    
    res.redirect('/admin')
}

module.exports = {
    addCourse,
    removeCourse
}