const router = require("express").Router();
const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register

router.post("/", async (req, res) => {
  try {
    const { userName, email, password, passwordVerify, address } = req.body;

    // validation

    if (!userName || !email || !password || !passwordVerify || !address) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }

    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: "Please enter a password of at least 6 charecters.",
      });
    }
    if (password !== passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter the same password twice." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res
        .status(400)
        .json({ errorMessage: "An account with this email already exists." });
    } else {
      // hash the password

      const salt = await bcrypt.genSaltSync();
      const passwordHash = await bcrypt.hashSync(password, salt);

      // save a new user account to db

      const newUser = new User({
        userName,
        email,
        passwordHash,
        address,
      });
      const savedUser = await newUser.save();

      // sign the token

      const token = jwt.sign(
        {
          user: savedUser._id,
        },
        process.env.JWT_SECRET
      );

      // send the token in a HTTP-only cookie

      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .send();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// log in

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ errorMessage: "Worng email or password." });
    } else {
      const passwordCorrect = await bcrypt.compare(
        password,
        existingUser.passwordHash
      );
      if (!passwordCorrect) {
        return res
          .status(401)
          .json({ errorMessage: "Worng email or password." });
      } else {
        //sign the token

        const token = jwt.sign(
          {
            user: existingUser._id,
          },
          process.env.JWT_SECRET
        );

        // send the token in a HTTP-only cookie

        res
          .cookie("token", token, {
            httpOnly: true,
          })
          .send();
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

router.post("/loggedIn", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ massege: false });
    } else {
      const tokenData = jwt.verify(token, process.env.JWT_SECRET);
      const loggedUser = await User.findOne({ _id: tokenData.user });
      res.send({ massege: true, loggedUser });
    }
  } catch (err) {
    res.json({ massege: false });
  }
});
module.exports = router;
