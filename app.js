const express = require('express');
const { ping, pong } = require('./pingpong.js');

const app = express();

app.use(express.json());
app.listen(3000);

app.get('/ping', ping);
app.get('/pong', pong);