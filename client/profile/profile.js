const baseURL = `https://capstone-devmountain-ka.herokuapp.com/client/profile`

const errCallback = err => console.log(err.response.data)

const profileForm = document.querySelector('#profile-form')
const firstNameInput = document.querySelector('input#first-name')
const lastNameInput = document.querySelector('input#last-name')
const phoneInput = document.querySelector('input#username')
const emailInput = document.querySelector('input#email')
const sumbmit = document.querySelector('button#submit')

const getProfile = () => axios.get(baseURL).catch(errCallback)

const signUp = evt => {
    evt.preventDefault()

    alert('Thanks for signing up!')
    document.querySelector('input#signupEmail').value = ' '
}
sumbmit.addEventListener('click', signUp)