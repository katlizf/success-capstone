const baseURL = `http://localhost:5000/client/profile`

// const profileCallback = {(data: profile)} => displayProfile(profile)
const errCallback = err => console.log(err.response.data)

const signUpBtn = document.querySelector('button#log-btn')
const firstName = document.querySelector('input#first-name')
const lastName = document.querySelector('input#last-name')
const username = document.querySelector('input#username')
const email = document.querySelector('input#email')
const password = document.querySelector('input#password')
// const submitBtn = document.querySelector('button.submit-login')

const createProfile = bodyObj => axios.post(`${baseURL}`, bodyObj)
// .then(profileCallback).catch(errCallback)


const submitHandler = evt => {
    evt.preventDefault()

    let bodyObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        email: email.value,
        password: password.value
    }
    createProfile(bodyObj)
    firstName.value = ''
    lastName.value = ''
    username.value = ''
    email.value = ''
    password.value = ''
}
document.querySelector('form#create-profile').addEventListener('submit', submitHandler)

const openForm = evt => {
    evt.preventDefault()
    document.querySelector('div.log-popup').style.display = "block"
}
signUpBtn.addEventListener('click', openForm)

// const closeForm = evt => {
//     evt.preventDefault()
//     document.querySelector('div.log-popup').style.display = "none"
// }
// submitBtn.addEventListener('click', closeForm)

