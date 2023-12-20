const express = require("express");
const posts = express.Router({ mergeParams: true });
const {
  getAllPostsByUser,
  getOnePostByUser,
  createPost,
  deleteOnePostForUser,
  updatePostForUser,
} = require("../queries/posts");


posts.get("/", async (req, res) => {
  const { userId } = req.params;
  try {
    const postsByUser = await getAllPostsByUser(userId);
    res.json(postsByUser);
  } catch (error) {
    res.json(error);
  }
});

posts.get("/:postId", async (req, res) => {
  const { userId, postId } = req.params;
  try {
    const onePostByUser = await getOnePostByUser(userId, postId);
    if (onePostByUser) {
      res.json(onePostByUser);
    } else {
      res.status(404).json({ message: "Post was not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

posts.post("/", async (req, res) => {
  try {
    const { userId } = req.params;
    const createdPost = await createPost(userId, req.body);
    if (createdPost) {
      res.json(createdPost);
    } else {
      res.status(400).json({ error: "Failed to create Post" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

posts.delete("/:postId", async (req, res) => {
  try {
    const { userId, postId } = req.params;
    const deletedPost = await deleteOnePostForUser(userId, postId);
    if (deletedPost) {
      res.status(200).json({
        success: true,
        payload: {
          data: deletedPost,
        },
      });
    }
  } catch (error) {
    res.send(error);
  }
});

posts.put("/:postId", async (req, res) => {
  try {
    const { userId, postId } = req.params;
    const { title, content } = req.body;
    const updatedPost = await updatePostForUser(userId, postId, {
      title,
      content,
    });
    if (updatedPost) {
      res.status(200).jsonn(updatedPost);
    } else {
      res.status(404).json("There was a problem updating Post");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = posts;
