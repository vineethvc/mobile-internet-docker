const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const userRouter = require('./user/user.router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'It works!!!' });
});

app.use('/api/users', userRouter);

module.exports = app;
