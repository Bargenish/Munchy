/**
 * example of a very basic model with functions for retrival of documents from your db
 */
// grab packageswe need
const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const userSchema = new Schema({
  phoneNum: String,
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  userName: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// methods
function getAll() {
  User.find();
}

function getOne(err, id) {
  if (err) { throw err; }

  return User.find(id);
}

function findAndDelete(err, id) {
  getOne(id).delete();
}

function findAndUpdate(err, id) {
}

module.exports = User;
