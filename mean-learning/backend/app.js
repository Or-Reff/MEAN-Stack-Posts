// imports
const express = require('express');

const app = express();

app.use((res,req,next) =>{
    console.log('First middleware');
    next();
});

app.use((res,req,next) =>{
    console.log('Hello from express!');
    next();
});

module.exports = app;