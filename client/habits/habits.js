const baseURL = `http://localhost:5000/client/habits`


const addNewHabitButn = document.querySelector('button#add-habit')
const recBtn = document.querySelector('button#click-here')


const cloneHabitCal = evt => {
    evt.preventDefault()
    let clone = document.querySelector('div#clone').cloneNode(true)
    let buttonRow = document.getElementById('button#add-habit')
    document.querySelector('section').appendChild(clone)
    
    // let newRow = document.createElement('tr')
    // let buttonRow = document.getElementById('btn-row')
    // buttonRow.parentNode.insertBefore(newRow, buttonRow)

    // let newTDInput = newRow.appendChild(document.createElement('td'))
    // let input = newTDInput.appendChild(document.createElement('input'))
    // input.className = "habit-name"
    // input.type = "text"
    // input.placeholder = "Track a new habit here"

    // let newTDBoxes = newRow.appendChild(document.createElement('td'))
    // let boxes = newTDBoxes.appendChild(document.createElement('input'))
    // boxes.class = "done"
    // boxes.type = "checkbox"
}

// const errCallback = err => console.log(err.response.data)

const getRec = () => axios.get(baseURL).then(res => {
    alert(res.data)
    })

addNewHabitButn.addEventListener('click', cloneHabitCal)
recBtn.addEventListener('click', getRec)
