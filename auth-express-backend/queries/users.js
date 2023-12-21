// this file is in charge of QUERYING
// the DB and returning the data to the controller

const db = require("../db/dbConfig.js");


const getOneUser = async (id) => {
    try {
        const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id)
        return oneUser
    } catch (error){
        return error
    }
};
const getOneUserByEmail = async ({email}) => {
    try {
        const oneUser = await db.oneOrNone("SELECT * FROM users WHERE email=$1", email)
        return oneUser
    } catch (error){
        return error
    }
};
const createUser = async (user) => {
    try {
        const createdUser = await db.one("INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [user.firstname, user.lastname, user.email, user.password])
        return createdUser
    } catch (error) {
        return error
    }
}


module.exports = {
    getOneUser,
    getOneUserByEmail,
    createUser
}