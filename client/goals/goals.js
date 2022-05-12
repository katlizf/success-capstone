const baseURL = `http://localhost:5000/client/goals`

const goalsCallback = ({data: goals}) => displayGoals(goals)
const errCallback = err => console.log(err.response.data)

const goalsContainer = document.querySelector('section#goals-container')
const goalName = document.querySelector('input.user-input')
const progressNotes = document.querySelector('textarea.notes')


const getGoals = () => axios.get(baseURL).then(goalsCallback).catch(errCallback)
const createGoal = goalName => axios.post(`${baseURL}`, {goalName}).then(getGoals).catch(errCallback)
const updateGoal = (id, progressNotes) => axios.put(`${baseURL}/${id}`, {progressNotes}).then(getGoals).catch(errCallback)
const deleteGoal = id => axios.delete(`${baseURL}/${id}`).then(getGoals).catch(errCallback)

// 

const submitHandler = evt => {
    evt.preventDefault()

    let bodyObj = {
        goalName: goalName.value
       }
    createGoal(bodyObj)
    goalName.value = ''
}
document.querySelector('form#goal-form').addEventListener('submit', submitHandler)

// 

const createGoalBoard = goal => {
    console.log(goal)
    const newGoal = document.createElement('div')
    newGoal.classList.add('new-goal')
    newGoal.innerHTML = 
    `<div class = "goal-div">
        <p class="goal-name">${goal.goal_name}</p>
        <hr>
        <textarea class="notes" type="text" placeholder="Add some progress notes!" onchange="updateGoal(${goal.goal_id}, this.value)">${goal.progress_notes}</textarea>
        <button class="finished" onclick="deleteGoal(${goal.goal_id})">Achieved!</button>
    </div>`
    goalsContainer.appendChild(newGoal)
}

// 

const displayGoals = arr => {
    goalsContainer.innerHTML = ``
    for (let i=0; i<arr.length; i++) {

        createGoalBoard(arr[i])
    }
}

// 

getGoals()