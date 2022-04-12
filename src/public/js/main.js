const logOut = document.querySelector('#logOut')

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

logOut.addEventListener('click', deleteAllCookies)

const addCourse = document.querySelector('#addCourse')
const addCourseForm = document.querySelector('.addCourse')

addCourse.addEventListener('click', ()=>{
    addCourseForm.classList.remove('visually_hidden')
})


const removeCourse = document.querySelector('#removeCourse')
const removeCourseForm = document.querySelector('.removeCourse')

removeCourse.addEventListener('click', ()=>{
    removeCourseForm.classList.remove('visually_hidden')
})

const iks1 = document.querySelector('.iks1')

iks1.addEventListener('click', ()=> {
    addCourseForm.classList.add('visually_hidden')
})

const iks2 = document.querySelector('.iks2')

iks2.addEventListener('click', ()=> {
    removeCourseForm.classList.add('visually_hidden')
})

const courses = document.querySelector('#courses')
const groups = document.querySelector('#groups')
const teachers = document.querySelector('#teachers')
const students = document.querySelector('#students')

const removeHeader = document.querySelector('.header')
const course = document.querySelector('.courses')
const group = document.querySelector('.groups')
const teacher = document.querySelector('.teachers')
const student = document.querySelector('.students')

courses.addEventListener('click', ()=> {
    removeHeader.classList.add('visually_hidden')
    group.classList.add('visually_hidden')
    teacher.classList.add('visually_hidden')
    student.classList.add('visually_hidden')
    course.classList.remove('visually_hidden')
})

groups.addEventListener('click', ()=> {
    removeHeader.classList.add('visually_hidden')
    course.classList.add('visually_hidden')
    teacher.classList.add('visually_hidden')
    student.classList.add('visually_hidden')
    group.classList.remove('visually_hidden')
})

teachers.addEventListener('click', ()=>{
    removeHeader.classList.add('visually_hidden')
    course.classList.add('visually_hidden')
    group.classList.add('visually_hidden')
    student.classList.add('visually_hidden')
    teacher.classList.remove('visually_hidden')
})

students.addEventListener('click', ()=>{
    removeHeader.classList.add('visually_hidden')
    course.classList.add('visually_hidden')
    group.classList.add('visually_hidden')
    teacher.classList.add('visually_hidden')
    student.classList.remove('visually_hidden')
})

const addGroups = document.querySelector('#addGroup')
const addGroup = document.querySelector('.addGroup')

addGroups.addEventListener('click', ()=> {
    addGroup.classList.remove('visually_hidden')
})

const iks3 = document.querySelector('.iks3')

iks3.addEventListener('click', ()=> {
    addGroup.classList.add('visually_hidden')
})

const removeGroups = document.querySelector('#removeGroup')
const removeGroup = document.querySelector('.removeGroup')
const iks4 = document.querySelector('.iks4')
const iks5 = document.querySelector('.iks5')
const iks6 = document.querySelector('.iks6')
const iks7 = document.querySelector('.iks7')
const iks8 = document.querySelector('.iks8')
const iks9 = document.querySelector('.iks9')

removeGroups.addEventListener('click', ()=> {
    removeGroup.classList.remove('visually_hidden')
})

iks4.addEventListener('click', ()=> {
    removeGroup.classList.add('visually_hidden')
})

const addTeachers = document.querySelector('.addTeacher')
const addTeacher = document.querySelector('#addTeacher')

addTeachers.addEventListener('click', ()=> {
    addTeacher.classList.remove('visually_hidden')
})

iks5.addEventListener('click', ()=> {
    addTeacher.classList.add('visually_hidden')
})

const removeTeachers = document.querySelector('.removeTeachers')
const removeTeacher = document.querySelector('.removeTeacher')

removeTeacher.addEventListener('click', ()=>{
    removeTeachers.classList.remove('visually_hidden')
})

iks6.addEventListener('click', ()=> {
    removeTeachers.classList.add('visually_hidden')
})

const attCourse = document.querySelector('.attCourse')
const attach = document.querySelector('#attach')

attCourse.addEventListener('click', ()=>{
    attach.classList.remove('visually_hidden')
})

iks7.addEventListener('click', ()=> {
    attach.classList.add('visually_hidden')
})

const addStudent = document.querySelector('.addStudent-btn')
const addStudents = document.querySelector('.addStudent')

addStudent.addEventListener('click', ()=> {
    addStudents.classList.remove('visually_hidden')
})

iks8.addEventListener('click', ()=> {
    addStudents.classList.add('visually_hidden')
})

const removeStudentBtn = document.querySelector('#removeStudentBtn') 
const removeStudentsWrapper = document.querySelector('#removeStudent-wrapper')

removeStudentBtn.addEventListener('click', ()=> {
    removeStudentsWrapper.classList.remove('visually_hidden')
})

iks9.addEventListener('click', ()=> {
    removeStudentsWrapper.classList.add('visually_hidden')
})