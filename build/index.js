"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const sequelize = require('./database/databaseconfig');
const Sequelize = require('sequelize');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const studentRoute = require('./routes/studentroutes');
app.listen(port, () => {
    console.log('server is running at https://localhost:3000');
});
app.use('/api', studentRoute);
