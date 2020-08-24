const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Video = require("../models/Video");
const Gifs = require("../models/Gifs");

router.use(cors());

process.env.SECRET_KEY = "secret";

router.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
  };

  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              res.json({ status: user.email + "Registered!" });
            })
            .catch((err) => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.send(token);
        } else {
          // Passwords don't match
          res.json({ error: "User does not exist" });
        }
      } else {
        res.json({ error: "User does not exist" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not exist");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.post("/upload", (req, res) => {
  const userData = {
    url: req.body.url,
    title: req.body.title,
    description: req.body.description,
    id: req.body.id,
  };
  Video.create(userData)
    .then(() => {
      res.json("Video Added!");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.post("/gif", (req, res) => {
  const gifData = {
    url: req.body.url,
    id: req.body.id,
    date: req.body.date,
  };
  Gifs.create(gifData)
    .then(() => {
      res.json("Video Added!");
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.get("/upload", (req, res) => {
  Video.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/upload/:id", (req, res) => {
  Video.findOne({
    id: req.params.id,
  })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/gif/:id", (req, res) => {
  Gifs.find({
    id: req.params.id,
  })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
