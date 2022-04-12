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

const groups = document.querySelector('#groups')
const teachers = document.querySelector('#teachers')
const groupList = document.querySelector('#groups-list')
const teacherList = document.querySelector('#teachers-list')


groups.addEventListener('click', ()=> {
    teacherList.classList.add('visually_hidden')
    groupList.classList.remove('visually_hidden')
})

teachers.addEventListener('click', ()=> {
    groupList.classList.add('visually_hidden')
    teacherList.classList.remove('visually_hidden')
})