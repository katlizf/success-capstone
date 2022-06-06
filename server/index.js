const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { SERVER_PORT } = process.env;
const { seed } = require('./seed');
const {
  getHabits,
  createHabit,
  deleteHabit,
  getGoals,
  getRec,
  createGoal,
  updateGoal,
  deleteGoal,
  getProfile,
  createProfile,
} = require('./controller');

const app = express();
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/landing', 'landing.html'));
});

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../public/build', 'index.html'));
//   });

app.get('/styles', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/landing/landing.css'));
});
app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/landing/landing.js'));
});

app.post('/seed', seed);

app.get(`/public/habits`, getHabits);
app.post(`/public/habits`, createHabit);
app.delete(`/public/habits/:id`, deleteHabit);
app.get(`/public/recomm`, getRec);
app.get(`/public/goals`, getGoals);
app.post(`/public/goals`, createGoal);
app.put(`/public/goals/:id`, updateGoal);
app.delete(`/public/goals/:id`, deleteGoal);
app.get(`/public/profile`, getProfile);
app.post(`/public/profile`, createProfile);

const port = process.env.PORT || SERVER_PORT;

app.listen(port, () => console.log('Server is running on port 5000'));
