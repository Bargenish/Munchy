/**
 * example of a very basic model with functions for retrival of documents from your db
 */
// grab packageswe need
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const roleSchema = new Schema({
  name: String,
});
const Role = mongoose.model('Role', roleSchema);

// methods
function getAll() {
  Role.find();
}

function getOne(err, id) {
  if (err) { throw err; }

  return Role.find(id);
}

function findAndDelete(err, id) {
  getOne(id).delete();
}

function findAndUpdate(err, id) {
}

module.exports = Role;
