const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {SERVER_PORT} = process.env
const {seed} = require('./seed')
const {getGoals, createGoal, getRec, deleteGoal} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/seed', seed)

app.get(`/client/goals`, getGoals)
app.post(`/client/goals`, createGoal)
app.get(`/client/habits`, getRec)
app.delete(`/client/goals/:id`, deleteGoal)




app.listen(5000, () => console.log('Server is running on port 5000'))