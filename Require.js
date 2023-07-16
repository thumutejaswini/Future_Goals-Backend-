const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const su = require('./Routes/su');
const Login = require('./Routes/Login');
const register = require('./Routes/register');
const contact = require('./Routes/contact');
const inter = require('./Routes/inter');
const btech=require('./Routes/btech');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/su', su);
app.use('/Login', Login);
app.use('/register', register);
app.use('/contact', contact);
app.use('/inter', inter);
app.use('/btech',btech)


module.exports = app;