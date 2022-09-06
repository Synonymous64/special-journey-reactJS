const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//! Creating a token
const JWT_SECRET = "Prajwalis$OOL";
//* Create a user using: POST "/api/auth". Doesn't require Auth
router.post(
  "/",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "enter a valid password").isLength({ min: 5 }),
    body("bio", "enter a valid bio").isLength({ max: 120 }),
  ],
  async (req, res) => {
    //* if there are errors, return bad request and the errors
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //* check whether user with the same email exist already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry :/ A user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //* Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        bio: req.body.bio,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(authToken);
      // res.json(user);
      res.json({authToken});
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Something went wrong :/ " });
    }
  }
);
module.exports = router;
