const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {SERVER_PORT} = process.env
const {seed} = require('./seed')
const {getHabits, createHabit, deleteHabit, getGoals, createGoal, getRec, updateGoal, deleteGoal, getProfile, createProfile} = require('./controller')

const app = express()
const path = require('path')


app.use(express.json())
app.use(cors())
app.use(express.static("client"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/landing/landing.html'))
})
app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/landing/landing.css'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/landing/landing.js'))
})

app.post('/seed', seed)

app.get(`/client/habits`, getHabits)
app.post(`/client/habits`, createHabit)
app.delete(`/client/habits/:id`, deleteHabit)
app.get(`/client/recomm`, getRec)
app.get(`/client/goals`, getGoals)
app.post(`/client/goals`, createGoal)
app.put(`/client/goals/:id`, updateGoal)
app.delete(`/client/goals/:id`, deleteGoal)
app.get(`/client/profile`, getProfile)
app.post(`/client/profile`, createProfile)


const port = process.env.PORT || SERVER_PORT

app.listen(port, () => console.log('Server is running on port 5000'))