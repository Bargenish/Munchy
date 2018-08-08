const express = require('express');

const router = express.Router();
const Category = require('../models/category');

// below are example's of your basic CRUD functions and wont work
router.route('/categories') // <host>/api/categories

	.get((req, res) => {
		Category.find((err, categories) => {
			if (err) { res.send(err); }

			res.json(categories);
		});
	});

  router.route('/categories/sellers')

	.get((req, res) => {
		const aggregatorOpts = [
			{$lookup: {
        		from: 'sellers',
        		localField: 'name',
        		foreignField: 'categories',
        		as: 'data'
      		}},
			{$unwind: '$data'},
			{$group: {
        		_id: '$_id',
        		y: {$sum: 1}
      		}} 
		];

		Category.aggregate(aggregatorOpts).exec(((err, result) => {
      if (err) {
				res.send(err);
			}
			res.json(result);
    }));
	});

router.route('/categories/:category_id')

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
	.get((req, res) => {
		Category.findById(req.params.category_id, (err, category) => {
			if (err) {
				res.send(err);
			}
			res.json(category);
		});
	});


module.exports = router;
