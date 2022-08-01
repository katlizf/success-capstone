const baseURL = `https://git.heroku.com/success-capstone.herokuapp.com/public/habits`

const habitsCallback = ({data: habits}) => displayHabits(habits)
const errCallback = err => console.log(err.response.data)

const habitsContainer = document.querySelector('section.habits-container')
const recBtn = document.querySelector('form#recommendation')
const habitName = document.querySelector('input.userInput')
const submit = document.querySelector('button#submit')


const getHabits = () => axios.get(baseURL).then(habitsCallback).catch(errCallback)
const createHabit = habitName => axios.post(`${baseURL}`, {habitName}).then(getHabits).catch(errCallback)
const deleteHabit = id => axios.delete(`${baseURL}/${id}`).then(getHabits).catch(errCallback)



const getRec = evt => {
    evt.preventDefault()
    axios.get(`https://git.heroku.com/success-capstone.herokuapp.com/public/recomm`).then(res => {
    alert(res.data)
    })
}
recBtn.addEventListener('click', getRec)

 

const submitHandler = evt => {
    evt.preventDefault()

    let bodyObj = {
        habitName: habitName.value
    }

    createHabit(bodyObj)
    habitName.value = ''
}
document.querySelector('form#habitForm').addEventListener('submit', submitHandler)



const createHabitBoard = habit => {
    const newHabit = document.createElement('div')
    newHabit.classList.add('new-habit')
    newHabit.innerHTML =
    `<div>
        <form class="calendar">
            <h2 class="habbitName">${habit.habit_name}</h2>
            <hr>
            <h3 class="month">May</h3>  
        <table>
                <tr>
                    <td>Su</td>
                    <td>Mo</td>
                    <td>Tu</td>
                    <td>We</td>
                    <td>Th</td>
                    <td>Fr</td>
                    <td>Sa</td>
                </tr>
            <tbody>
                <tr>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">1</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">2</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">3</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">4</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">5</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">6</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">7</td>
                </tr>
                <tr>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">8</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">9</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">10</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">11</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">12</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">13</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">14</td>
                </tr>
                <tr>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">15</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">16</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">17</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">18</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">19</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">20</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">21</td>
                </tr>
                <tr>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">22</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">23</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">24</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">25</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">26</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">27</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">28</td>
                </tr>
                <tr>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">29</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">30</td>
                    <td onclick="this.style.backgroundColor = '#5797B2', this.style.color='white'">31</td>
                    <td ></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <button id="done" onclick="deleteHabit(${habit.habit_id})">Done</button>
        </form>
    </div>`
    habitsContainer.appendChild(newHabit)
}
// on click only allows background color and color to change once, not toggle between


const displayHabits = arr => {
    habitsContainer.innerHTML = ``
    for (let i=0; i<arr.length; i++) {
        createHabitBoard(arr[i])
    }
}

// 

getHabits()


// let clicks = 0
// const highlight = (clicked_id) => {    
//     let td = document.getElementById(clicked_id)
//     clicks++
    
//     if (clicks%2 !== 0) {
//         td.style.backgroundColor = '#5797B2'
//         td.style.color = 'white'
//     } else if (clicks%2 === 0) {
//         td.style.backgroundColor = 'rgb(216, 227, 232)'
//         td.style.color= 'black'
//     }
// }
// not specific to the calendar that's clicked on, only specific to fist calendar dynamically created

const signUp = evt => {
    evt.preventDefault()

    alert('Thanks for signing up!')
    document.querySelector('input#signupEmail').value = ' '
}
submit.addEventListener('click', signUp)