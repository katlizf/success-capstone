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
        console.log(goalName.goalName)

        sequelize.query (`
            INSERT INTO user_goals (goal_name, progress_notes)
            VALUES ('${goalName.goalName}', '')
            RETURNING *`
        )
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
    deleteGoal: (req, res) => {
        let {id} = req.params
        sequelize.query(`
        DELETE
        FROM user_goals
        WHERE goal_id = ${id}`)
        .then(res.sendStatus(200))
        .catch(err => console.log(err))
    }
}