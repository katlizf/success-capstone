const profileForm = document.querySelector('#profile-form')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const phoneInput = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const addressInput = document.querySelector('#address')
const cityInput = document.querySelector('#password')


// const inputs = [firstNameInput, lastNameInput, usernameInput, emailInput, passwordInput]

// inputs.forEach(input => {
//     input.addEventListener('change', (e) => {
//         input.value = e.target.value
//         console.log(input.value)
//     })
// })
// ^^^^ NOT NEEDED? ^^^^


// NEED TO ADD AXIOS LOCATIONS, HTTP://....

// const getUserProfile () => {
//     // axios.get('')
//     // .then (res => {
//     //     const user = res.data[0]

//     //     const {
//     //         first_name: firstName,
//     //         last_name: lastName,
//     //         username: username,
//     //         email: email,
//     //         password: password
//     //     } = user

//     //     firstNameInput.value = firstName
//     //     lastNameInput.value = lastName
//     //     usernameInput.vlaue = username
//     //     emailInput.value = email
//     //     passwordInput.value = password
//     // })
// }

// const updateInfo = () => {
//     // let body = {
//     //     firstName: firstNameInput.value,
//     //     lastName: lastNameInput.value,
//     //     username: usernameInput.value,
//     //     email: emailInput.value,
//     //     password: passwordInput.value
//     // }
//     // axios.put('', body)
//     //     .then(() => res.sendStatus(200))
//     //     .catch(err => console.log(err))
// }

newUserForm.addEventListener('submit', evt => {
    evt.preventDefault()
    updateInfo()
})

getUserProfile()