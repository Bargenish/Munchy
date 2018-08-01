/**
 * example of a very basic model with functions for retrival of documents from your db
 */
// grab packageswe need
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const sellerSchema = new Schema({
  name: String,
  categories: [String],
  city: String,
  location: String,
  maxDeliveryTime: Number,
  imageName: Number,
});
const Seller = mongoose.model('Seller', sellerSchema);

// methods
function getAll() {
  Seller.find();
}

function getOne(err, id) {
  if (err) { throw err; }

  return Seller.find(id);
}

function findAndDelete(err, id) {
  getOne(id).delete();
}

function findAndUpdate(err, id) {
}

module.exports = Seller;
