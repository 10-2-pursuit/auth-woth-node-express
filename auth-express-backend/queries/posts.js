const db = require("../db/dbConfig");

const getAllPostsByUser = async (user_id) => {
  try {
    const postsByUser = await db.any(
      "SELECT * FROM posts JOIN users ON users.id = posts.user_id WHERE posts.user_id = $1",
      user_id
    );
    return postsByUser;
  } catch (error) {
    console.error(error);
  }
};

const getOnePostByUser = async (user_id, id) => {
  try {
    const postByUser = await db.one(
      "SELECT * FROM posts WHERE user_id=$1 AND id=$2",
      [user_id, id]
    );
    return postByUser;
  } catch (error) {
    console.error(error);
  }
};

const createPost = async (user_id, post) => {
  try {
    const { title, content } = post;
    const createdPost = await db.one(
      "INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, user_id]
    );
    return createdPost;
  } catch (error) {
    console.error(error);
  }
};

const deleteOnePostForUser = async (user_id, post_id) => {
  try {
    await db.none("DELETE FROM posts WHERE user_id = $1 AND post_id = $2", [
      user_id,
      post_id,
    ]);
    alert(`Post with ID ${post_id} deleted by user with ID ${user_id}`);
  } catch (error) {
    console.error(error);
  }
};

const updatePostForUser = async (user_id, post_id) => {
    try {
        const { title, content } = post;
        const updatedPost = await db.one("UPDATE posts SET title=$1, content=$2 WHERE user_id=$3 AND post_id=$4 RETURNING *", [title, content, user_id, post_id]);
        return updatedPost
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
  getAllPostsByUser,
  getOnePostByUser,
  createPost,
  deleteOnePostForUser,
  updatePostForUser
};
