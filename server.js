
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { app, server, io } = require('./server/WSApi/wsApi');
const users = require('./server/routes/users'); // route example
const sellers = require('./server/routes/sellers');
const roles = require('./server/routes/roles');
const categories = require('./server/routes/categories');

// mongoose setup
const MONGOURI = 'mongodb://splash:splash@splashtv-shard-00-00-9k5zc.mongodb.net:27017,splashtv-shard-00-01-9k5zc.mongodb.net:27017,splashtv-shard-00-02-9k5zc.mongodb.net:27017/munchy?ssl=true&replicaSet=SplashTV-shard-0&authSource=admin&retryWrites=true';

// this .env file should be added to .gitignore since it contains passwords
mongoose.connect(MONGOURI, { useMongoClient: true });
const db = mongoose.connection;

db.on('error', () => console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'dist'))); // angular project
// the app.use that's commented out below is for static file hosting: like images text file's music
// app.use('/myuri', express.static(path.join(__dirname,'./file location relative to this file')));

app.use('/api', users); // route example creates url's like: <host>/users/<routes from file>
app.use('/api', sellers);
app.use('/api', roles);
app.use('/api', categories);

// routes anything not caught by the routes above to your angular project if possible
// app.use('*', express.static(path.join(__dirname, 'dist')));

// PORT is another variable that can be placed in the .env file
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
