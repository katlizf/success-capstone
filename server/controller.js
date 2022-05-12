require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
})

let goalId = 1

module.exports = {
    getHabits: (req, res) => {
        sequelize.query(
            `SELECT *
            FROM user_habits;`
        )
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    createHabit: (req, res) => {
        const {habitName} = req.body

        sequelize.query (`
            INSERT INTO user_habits (habit_name)
            VALUES ('${habitName.habitName}')
            RETURNING *`
        )
            .then(res.sendStatus(200))
            .catch(err => console.log(err))            
    },
    deleteHabit: (req, res) => {
        let {id} = req.params
        sequelize.query(
        `DELETE
        FROM user_habits
        WHERE habit_id = ${id}`)
            .then(res.sendStatus(200))
            .catch(err => console.log(err))
    },
    getRec: (req, res) => {
        const reccoms = 
        ["No spending today", 
        "Made it to the gym", 
        "Got 8 hours of sleep",
        "Took my medications",
        "Drank 24oz of water",
        "Watered plants",
        "Did a small cleaning task",
        "Didn't drink soda",
        "Didn't smoke",
        "Meditated for at least 10 min",
        "Flossed"
        ];
        let randomIndex = Math.floor(Math.random() * reccoms.length)
        let randomRec = reccoms[randomIndex]
        res.status(200).send(randomRec)
    },
    getGoals: (req, res) => {
        sequelize.query(
        `SELECT *
        FROM user_goals;`
        )
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    createGoal: (req, res) => {
        const {goalName} = req.body

        sequelize.query (`
            INSERT INTO user_goals (goal_name, progress_notes)
            VALUES ('${goalName.goalName}', '')
            RETURNING *`)

            .then(res.sendStatus(200))
            .catch(err => console.log(err))            
    },
    updateGoal: (req, res) => {
        let {id} = req.params
        let {progressNotes} = req.body

        sequelize.query(`
        UPDATE user_goals
        SET progress_notes = '${progressNotes}'
        WHERE goal_id = ${id};`)
            .then(res.sendStatus(200))
            .catch(err => console.log(err))
    },
    deleteGoal: (req, res) => {
        let {id} = req.params

        sequelize.query(`
        DELETE
        FROM user_goals
        WHERE goal_id = ${id}`)
            .then(res.sendStatus(200))
            .catch(err => console.log(err))
    },
    createProfile: (req, res) => {
        const {firstName, lastName, username, email, password} = req.body

        sequelize.query(`
        INSERT INTO user_profile (first_name, last_name, username, email, password)
        VALUES ('${firstName}', '${lastName}', '${username}', '${email}', '${password}');`)
            .then(res.sendStatus(200))
            .catch(err => console.log(err))
    },
    getProfile: (req, res) => {
        sequelize.query(
        `SELECT *
        FROM user_porfile;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }
}