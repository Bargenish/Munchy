const express = require('express');

const router = express.Router();
const Role = require('../models/role');

// below are example's of your basic CRUD functions and wont work
router.route('/roles') // <host>/api/roles

  .get((req, res) => {
    Role.find((err, roles) => {
      if (err) { res.send(err); }

      res.json(roles);
    });
  });

router.route('/roles/:role_id')

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get((req, res) => {
    Role.findById(req.params.role_id, (err, role) => {
      if (err) {
        res.send(err);
      }
      res.json(role);
    });
  });

module.exports = router;
