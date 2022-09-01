const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
//* Create a user using: POST "/api/auth". Doesn't require Auth
router.post(
  "/",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "enter a valid password").isLength({ min: 5 }),
    body("bio", "enter a valid bio").isLength({ max: 120 }),
  ],
  (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      bio: req.body.bio,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({
          error: "please enter the unique email",
          message: err.message,
        });
      });
  }
);
module.exports = router;
