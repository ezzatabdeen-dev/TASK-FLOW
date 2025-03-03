const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ezzatabdeendev:w1TMvEZ1WujPDiFg@cluster0.7gxdz.mongodb.net/university_platform?retryWrites=true&w=majority&appName=Cluster0');

const UserModel = require('./models/Users');

app.get('/users', async(req, res) => {
    const users = await UserModel.find();
    res.json(users);
});

app.listen('3001',() => {
    console.log('server works?');
});


