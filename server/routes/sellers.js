const express = require('express');
const googlePlaces = require('googleplaces')('AIzaSyDIwXwMv1L8-KCq1aO6wCJ9FYxNpigsM_I', 'json');
const router = express.Router();
const Seller = require('../models/seller');
const { io } = require('../WSApi/wsApi');
textSearch = googlePlaces.textSearch;
placeDetailsRequest = googlePlaces.placeDetailsRequest;

// below are example's of your basic CRUD functions and wont work
router.route('/sellers') // <host>/api/sellers

  // create a seller (accessed at POST http://localhost:3000/api/sellers)
  .post((req, res) => {
    const seller = new Seller(); // create a new instance of the Bear model
    seller.name = req.body.name; // set the bears name (comes from the request)
    seller.city = req.body.city;
    seller.location = req.body.location;
    seller.maxDeliveryTime = req.body.maxDeliveryTime;
    seller.imageName = req.body.imageName;
    seller.orderNum = req.body.orderNum;

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

router.route('/sellers/top')

  .get(async (req, res) => {
    sellersParams = (await Seller.find()).map(seller => {return { params: `${seller.name}, ${seller.location}`,
                                                          seller};});
    topSellers = [];
    sellersParams.forEach(async (sellerPrm) => {
      var parameters = {
        query: sellerPrm.params
      };
  
      sellerDetails = await textSearch(parameters, async function (error, response) {
        if (error) throw error;
        return await placeDetailsRequest({reference: response.results[0].reference}, function (error, response) {
            if (error) throw error;

            io.emit('top', Object.assign(sellerPrm.seller.toObject(), { rating: response.result.rating}));
        });
      });

      
    })
  });

router.route('/sellers/cityOrders')

  .get((req, res) => {
		const aggregatorOpts = [
			{$group: {
        _id: '$city',
        y: {
          $sum: '$orderNum'
        }
      }} 
		];

		Seller.aggregate(aggregatorOpts).exec(((err, result) => {
      if (err) {
				res.send(err);
			}
			res.json(result);
    }));
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
      seller.name = req.body.name; 
      seller.city = req.body.city;
      seller.location = req.body.location;
      seller.maxDeliveryTime = req.body.maxDeliveryTime;
      seller.imageName = req.body.imageName;
      seller.orderNum = req.body.orderNum;
      
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
