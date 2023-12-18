const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const {
  getOneUser,
  getOneUserByEmail,
  createUser,
} = require("../queries/users.js");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const users = express.Router();

users.post("/login", async (req, res) => {
  const oneUser = await getOneUserByEmail(req.body);
  if (oneUser) {
    bcrypt.compare(req.body.password, oneUser.password).then((isMatch) => {
      if (isMatch) {
        const { id, email, firstname, lastname } = oneUser
        const payload = { id, email, firstname, lastname };
        res.json({success:true, user:payload })
        // jwt.sign(
        //   payload,
        //   PRIVATE_KEY,
        //   { expiresIn: 3600,
        //    },
        //   (err, token) => {
        //     res.json({
        //       success: true,
        //       token: "Bearer " + token,
        //       user:payload
        //     });
        //   }
        // );
      } else {
        res.status(400).json({password: 'Incorrect password'});
      }
    });
  } else {
    res.status(404).json({ error: "not found!" });
  }
});

users.post("/", async (req, res) => {
  const registeredUser = await getOneUserByEmail(req.body);
  if (registeredUser) {
    return res
      .status(400)
      .json({ email: "A user has already registered with this address" });
  } else {
    const newUser = req.body;

    bcrypt.genSalt(10, async (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        console.log(hash, "   hash ");
        newUser.password = hash;
        try {
          const createdUser = await createUser(newUser);
          console.log(createdUser, " created user aqui");
          if (createdUser.id) {
            res.status(200).json(newUser);
          }
        } catch (error) {
          res
            .status(400)
            .json({ error: "OH noeeees! You got a big huge error" });
        }
      });
    });
  }
});

// bookmarks.delete("/:id", async (req,res) => {
//     try {
//         const { id } = req.params;
//         const deletedBookmark = await deleteBookmark(id);
//         if(deletedBookmark) {
//             res.status(200).json({success:true, payload: {data: deletedBookmark}})
//         } else {
//             res.status(404).json("bookmark not found - uh oh")
//         }
//     } catch(err) {
//         res.send(err)
//     }
// });

// bookmarks.put("/:id", async(req, res) => {
//     const { id } = req.params;
//     const updatedBookmark = await updateBookmark(id, req.body);
//     if(updatedBookmark.id) {
//         res.status(200).json(updatedBookmark);
//     } else (
//         res.status(404).json("no bookmark found with that id")
//     )
// })

module.exports = users;
