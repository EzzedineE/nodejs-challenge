const http = require('http')
require('dotenv').config()
const express = require('express')
const todoRoutes = require('./routes/todo')
const userRoutes = require('./routes/users')
const emailRoutes = require('./routes/emailRoute')
const app = express()
const connect = require('./database/connect');
const server = http.createServer(app)
server.listen(process.env.PORT || 4000);
app.use(express.json());
app.use('/api/todo', todoRoutes);
app.use('/api/user', userRoutes);
app.use('/api/email', emailRoutes);

