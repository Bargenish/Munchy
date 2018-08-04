const express = require('express');
const socketIo = require('socket.io');
const createServer = require('http').createServer;
const Category = require('../models/category');
const Role = require('../models/user');
const Seller = require('../models/seller');
const User = require('../models/user');

const PORT = 3000;
const app = express();
const port = process.env.PORT || PORT;
const server = createServer(app);
const io = socketIo(server);

server.listen(this.port, () => {
  console.log('Websocket API: Running on port %s', port);
});

io.on('connect', (socket) => {
  console.log('Websocket API: Connected client on port %s.', port);

  socket.on('category', (body) => {
    if (body && body.id) {
      Category.findById(body.id, (err, category) => {
        if (err) {
          socket.emit('error', err);
        }

        socket.emit('category', category);
      });
    }

    Category.find((err, categories) => {
      if (err) {
        socket.emit('error', err);
      }

      socket.emit('category', categories);
    });
  });

  socket.on('role', (body) => {
    if (body && body.id) {
      Role.findById(body.id, (err, role) => {
        if (err) {
          socket.emit('error', err);
        }

        socket.emit('role', role);
      });
    }

    Role.find((err, roles) => {
      if (err) {
        socket.emit('error', err);
      }

      socket.emit('role', roles);
    });
  });

  socket.on('seller', (body) => {
    if (body && body.id) {
      Seller.findById(body.id, (err, seller) => {
        if (err) {
          socket.emit('error', err);
        }

        socket.emit('seller', seller);
      });
    }

    Seller.find((err, sellers) => {
      if (err) {
        socket.emit('error', err);
      }

      socket.emit('seller', sellers);
    });
  });

  socket.on('user', () => {
    User.find((err, users) => {
      if (err) {
        socket.emit('error', err);
      }

      socket.emit('user', users);
    });
  });

  socket.on('disconnect', () => {
    console.log('Websocket API: Client disconnected');
  });
});

module.exports = app;
