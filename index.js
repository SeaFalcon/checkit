const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env.dev') });

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = require('./router');

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router('/v3', app);

app.listen(3000, () => console.log('listening to 3000....'));
