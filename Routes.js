const routes = require('express').Router();

const {data} = require('./Data');
const { register, login } = require('./controller/userController');

routes.get('/tour',data);

routes.post('/register',register)
routes.post('/login',login)


module.exports = {routes}