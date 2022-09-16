const dontenv = require('dotenv');
const express = require('express');
const app = express();

dontenv.config({path:'./config.env'});
require('./db/conn');
app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.get('/signin', (req, res) => {
    res.send('Hello Login from the server')
});

app.get('/signup', (req, res) => {
    res.send('Hello Registeration from the server')
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`)
})