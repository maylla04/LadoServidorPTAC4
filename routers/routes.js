const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');

routes.get('/users', userController.findUsers);
routes.get('/users/:id', userController.findUser);
routes.post('/user', userController.createUser);
routes.delete('/user/:id', userController.deleteUser);
routes.put('/user/:id', userController.updateUser);
routes.post('/user/authenticated', userController.authenticateUser);


module.exports = routes;
