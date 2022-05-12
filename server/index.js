const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {SERVER_PORT} = process.env
const {seed} = require('./seed')
const {getHabits, createHabit, deleteHabit, getGoals, createGoal, getRec, updateGoal, deleteGoal, getProfile, createProfile} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

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




app.listen(5000, () => console.log('Server is running on port 5000'))