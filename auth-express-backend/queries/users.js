// this file is in charge of QUERYING
// the DB and returning the data to the controller

const db = require("../db/dbConfig.js");

// const getAllBookmarks = async () => {
//     try {
//         const allBookmarks = await db.any("SELECT * FROM bookmarks");
//         return allBookmarks
//     } catch(err) {
//         return err
//     }
// }
const getOneUser = async (id) => {
    try{
        const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id)
        return oneUser
    } catch (error){
        return error
    }
};
const getOneUserByEmail = async ({email}) => {
    try{
        const oneUser = await db.oneOrNone("SELECT * FROM users WHERE email=$1", email)
        return oneUser
    } catch (error){
        return error
    }
};
const createUser = async (bookmark) => {
    try {
        const createdUser = await db.one("INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [bookmark.firstname, bookmark.lastname, bookmark.email, bookmark.password])
        return createdUser
    } catch (error) {
        return error
    }
}

// const updateBookmark = async (id, bookmark) => {
//     try {
//         const { name, url, category, is_favorite } = bookmark;
//         const updatedBookmark = await db.one(
//             "UPDATE bookmarks SET name=$1, url=$2,category=$3, is_favorite=$4 WHERE id=$5 RETURNING *",
//             [name, url, category, is_favorite, id]
//         );
//         return updatedBookmark
//     } catch(err) {
//         return err
//     }
// };

module.exports = {
    getOneUser,
    getOneUserByEmail,
    createUser
}