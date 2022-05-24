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

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists user_habits;
        drop table if exists user_goals;
        drop table if exists user_profile;
        
        create table user_profile (
            user_id SERIAL PRIMARY KEY,
            first_name VARCHAR(50),
            last_name VARCHAR(80),
            username VARCHAR(50) NOT NULL,
            email VARCHAR(50),
            password VARCHAR(100) NOT NULL
        );

        create table user_habits (
            habit_id SERIAL PRIMARY KEY,
            habit_name VARCHAR(80) NOT NULL
        );

        create table user_goals (
            goal_id SERIAL PRIMARY KEY,
            goal_name VARCHAR(100) NOT NULL,
            progress_notes VARCHAR(5000)
        );

        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}