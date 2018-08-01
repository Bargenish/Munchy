const express = require('express');

const router = express.Router();
const User = require('../models/user');

// below are example's of your basic CRUD functions and wont work
router.route('/users') // <host>/api/users

  // create a user (accessed at POST http://localhost:3000/api/users)
  .post((req, res) => {
    const user = new User(); // create a new instance of the Bear model
    user.title = req.body.title; // set the bears name (comes from the request)
    user.body = req.body.body;
    // save the bear and check for errors
    user.save((err) => {
      if (err) { res.send(err); }

      res.json({ message: 'User created!' });
    });
  })
  .get((req, res) => {
    User.find((err, users) => {
      if (err) { res.send(err); }

      res.json(users);
    });
  });
router.route('/users/:user_id')

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get((req, res) => {
    User.findById(req.params.user_id, (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  })
  .put((req, res) => {
    // use our bear model to find the bear we want
    User.findById(req.params.user_id, (err, user) => {
      if (err) {
        res.send(err);
      }
      user.title = req.body.title; // update the users info
      user.body = req.body.body;
      // save the bear
      user.save((err) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'User updated!' });
      });
    });
  })
  .delete((req, res) => {
    User.remove({
      _id: req.params.user_id,
    }, (err, user) => {
      if (err) { res.send(err); }

      res.json({ message: 'User Successfully deleted' });
    });
  });

module.exports = router;
