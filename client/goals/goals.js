const baseURL = `http://localhost:5000/client/goals`

const goalsCallback = ({data: goals}) => displayGoals(goals)
const errCallback = err => console.log(err.response.data)

const goalsContainer = document.querySelector('section#goals-container')


const getGoals = () => axios.get(baseURL).then(goalsCallback).catch(errCallback)

const createGoal = goalName => axios.post(`${baseURL}`, {goalName}).then(getGoals).catch(errCallback)

const deleteGoal = id => axios.delete(`${baseURL}/${id}`).then(getGoals, console.log('hi')).catch(errCallback)


const goalName = document.querySelector('input.user-input')

const submitHandler = evt => {
    evt.preventDefault()

    let bodyObj = {
        goalName: goalName.value
    }

    createGoal(bodyObj)
    goalName.value = ''
}

document.querySelector('form#goal-form').addEventListener('submit', submitHandler)

const createGoalBoard = goal => {
    const newGoal = document.createElement('div')
    newGoal.classList.add('new-goal')
    newGoal.innerHTML = 
    `<div class = "goal-div">
    <p class="goal-name">${goal.goal_name}</p>
    <hr>
    <input class="notes" type="text" placeholder="Add some progress notes!">
    <input class="notes" type="text">
    <input class="notes" type="text">
    <button class="finished" onclick="deleteGoal(${goal.goal_id})">Finished!</button>
    </div>`

    goalsContainer.appendChild(newGoal)
}

const displayGoals = arr => {
    goalsContainer.innerHTML = ``
    for (let i=0; i<arr.length; i++) {

        createGoalBoard(arr[i])
    }
}

getGoals()

// const addNewGoal = document.querySelector('input.goal-name')
// const newNoteBtn = document.querySelector('button.new-note')
// const createGoal = document.querySelector('button#add-goal')


// addNewGoal.addEventListener('keypress', function(evt) {
//     if (evt.key === 'Enter') {
//         evt.preventDefault()
//         let note = document.createElement('tr')
//         let buttonRow = document.getElementById('btn-row')
//         buttonRow.parentNode.insertBefore(note, buttonRow)

//         let newTD = note.appendChild(document.createElement('td'))
//         let input = newTD.appendChild(document.createElement('input'))
//         input.className = "note"
//         input.type = "text"
//         input.placeholder = "Add a progress note"
//     }
// })

// const addNewNote = evt => {
//     evt.preventDefault()
//     let newNote = document.createElement('tr')
//     let buttonRow = document.getElementById('btn-row')
//     buttonRow.parentNode.insertBefore(newNote, buttonRow)

//     let newTD = newNote.appendChild(document.createElement('td'))
//     let input = newTD.appendChild(document.createElement('input'))
//     input.className = "note"
//     input.type = "text"
//     input.placeholder = "Add a progress note"
// }

// const createNewGoal = evt => {
//     evt.preventDefault()
//     // let clone = document.querySelector('table').cloneNode(true)
//     // document.querySelector('div.body').appendChild(clone)
    
//     let newGoal = document.createElement('table')
//     // let button = document.getElementById('add-goal')
//     // button.parentNode.insertBefore(newGoal, button)
//     document.querySelector('div.body').appendChild(newGoal)

//     let newTR = newGoal.appendChild(document.createElement('tr'))
//     let newTH = newTR.appendChild(document.createElement('th')) 
//     let newInput = newTH.appendChild(document.createElement('input'))
//     newInput.className = "goal-name"
//     newInput.type= "text"
//     newInput.placeholder = "Create a new goal"
//     // let tb = newGoal.appendChild(document.createElement('tbody'))
//     // let tr2 = tb.appendChild(document.createElement('tr'))
//     // let td2 = tr2.appendChild(document.createElement('hr'))

// }

// newNoteBtn.addEventListener('click', addNewNote)
// createGoal.addEventListener('click', createNewGoal)