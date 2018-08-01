const express = require('express');

const router = express.Router();
const Seller = require('../models/seller');

// below are example's of your basic CRUD functions and wont work
router.route('/sellers') // <host>/api/sellers

  // create a seller (accessed at POST http://localhost:3000/api/sellers)
  .post((req, res) => {
    const seller = new Seller(); // create a new instance of the Bear model
    seller.title = req.body.title; // set the bears name (comes from the request)
    seller.body = req.body.body;
    // save the bear and check for errors
    seller.save((err) => {
      if (err) { res.send(err); }

      res.json({ message: 'Seller created!' });
    });
  })
  .get((req, res) => {
    Seller.find((err, sellers) => {
      if (err) { res.send(err); }

      res.json(sellers);
    });
  });
router.route('/sellers/:seller_id')

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get((req, res) => {
    Seller.findById(req.params.seller_id, (err, seller) => {
      if (err) {
        res.send(err);
      }
      res.json(seller);
    });
  })
  .put((req, res) => {
    // use our bear model to find the bear we want
    Seller.findById(req.params.seller_id, (err, seller) => {
      if (err) {
        res.send(err);
      }
      seller.title = req.body.title; // update the sellers info
      seller.body = req.body.body;
      // save the bear
      seller.save((err) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Seller updated!' });
      });
    });
  })
  .delete((req, res) => {
    Seller.remove({
      _id: req.params.seller_id,
    }, (err, seller) => {
      if (err) { res.send(err); }

      res.json({ message: 'Seller Successfully deleted' });
    });
  });

module.exports = router;
