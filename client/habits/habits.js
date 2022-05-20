const baseURL = `https://capstone-devmountain-ka.herokuapp.com/client/habits`

const habitsCallback = ({data: habits}) => displayHabits(habits)
const errCallback = err => console.log(err.response.data)

const habitsContainer = document.querySelector('section.habits-container')
const recBtn = document.querySelector('form#recommendation')
const habitName = document.querySelector('input.userInput')


const getHabits = () => axios.get(baseURL).then(habitsCallback).catch(errCallback)
const createHabit = habitName => axios.post(`${baseURL}`, {habitName}).then(getHabits).catch(errCallback)
const deleteHabit = id => axios.delete(`${baseURL}/${id}`).then(getHabits).catch(errCallback)



const getRec = evt => {
    evt.preventDefault()
    axios.get(`https://capstone-devmountain-ka.herokuapp.com/client/recomm`).then(res => {
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
                    <td onClick="highlight(this.id)" id="1">1</td>
                    <td onClick="highlight(this.id)" id="2">2</td>
                    <td onClick="highlight(this.id)" id="3">3</td>
                    <td onClick="highlight(this.id)" id="4">4</td>
                    <td onClick="highlight(this.id)" id="5">5</td>
                    <td onClick="highlight(this.id)" id="6">6</td>
                    <td onClick="highlight(this.id)" id="7">7</td>
                </tr>
                <tr>
                    <td onClick="highlight(this.id)" id="8">8</td>
                    <td onClick="highlight(this.id)" id="9">9</td>
                    <td onClick="highlight(this.id)" id="10">10</td>
                    <td onClick="highlight(this.id)" id="11">11</td>
                    <td onClick="highlight(this.id)" id="12">12</td>
                    <td onClick="highlight(this.id)" id="13">13</td>
                    <td onClick="highlight(this.id)" id="14">14</td>
                </tr>
                <tr>
                    <td onClick="highlight(this.id)" id="15">15</td>
                    <td onClick="highlight(this.id)" id="16">16</td>
                    <td onClick="highlight(this.id)" id="17">17</td>
                    <td onClick="highlight(this.id)" id="18">18</td>
                    <td onClick="highlight(this.id)" id="19">19</td>
                    <td onClick="highlight(this.id)" id="20">20</td>
                    <td onClick="highlight(this.id)" id="21">21</td>
                </tr>
                <tr>
                    <td onClick="highlight(this.id)" id="22">22</td>
                    <td onClick="highlight(this.id)" id="23">23</td>
                    <td onClick="highlight(this.id)" id="24">24</td>
                    <td onClick="highlight(this.id)" id="25">25</td>
                    <td onClick="highlight(this.id)" id="26">26</td>
                    <td onClick="highlight(this.id)" id="27">27</td>
                    <td onClick="highlight(this.id)" id="28">28</td>
                </tr>
                <tr>
                    <td onClick="highlight(this.id)" id="29">29</td>
                    <td onClick="highlight(this.id)" id="30">30</td>
                    <td onClick="highlight(this.id)" id="31">31</td>
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


const displayHabits = arr => {
    habitsContainer.innerHTML = ``
    for (let i=0; i<arr.length; i++) {
        createHabitBoard(arr[i])
    }
}


getHabits()


let clicks = 0
const highlight = (clicked_id) => {
    let td = document.getElementById(clicked_id)
    clicks++

    if (clicks%2 !== 0) {
        td.style.backgroundColor = '#5797B2'
        td.style.color = 'white'
    } else if (clicks%2 === 0) {
        td.style.backgroundColor = 'rgb(216, 227, 232)'
        td.style.color= 'black'
    }
}
