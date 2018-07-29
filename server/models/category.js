/**
 * example of a very basic model with functions for retrival of documents from your db
 */
// grab packageswe need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var categorySchema = new Schema({
  name: String
});
var Category = mongoose.model('Category', categorySchema);

// methods
function getAll() {
  Category.find();
}

function getOne(err, id) {
  if(err){throw err}
    
  return Category.find(id);
}

function findAndDelete(err, id) {
  getOne(id).delete();
}

function findAndUpdate(err, id) {
}

module.exports = Category;
