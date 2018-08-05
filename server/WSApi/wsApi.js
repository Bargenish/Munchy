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

io.on('connect', (socket) => {
  console.log('Websocket API: Connected client on port %s.', port);

  socket.on('category', () => {
    Category.find((err, categories) => {
      if (err) {
        socket.emit('error', err);
      }

      socket.send({ 
        type: 'category',
        data: categories
      });
    });
  });

  socket.on('role', () => {
    Role.find((err, roles) => {
      if (err) {
        socket.emit('error', err);
      }

      socket.send({ 
        type: 'role',
        data: roles
      });
    });
  });

  socket.on('seller', () => {
    Seller.find((err, sellers) => {
      if (err) {
        socket.emit('error', err);
      }

      socket.send({ 
        type: 'seller',
        data: sellers
      });
    });
  });

  socket.on('user', () => {
    User.find((err, users) => {
      if (err) {
        socket.emit('error', err);
      }

      socket.send({ 
        type: 'user',
        data: users
      });
    });
  });

  socket.on('disconnect', () => {
    console.log('Websocket API: Client disconnected');
  });
});

module.exports = { app, server, io };
