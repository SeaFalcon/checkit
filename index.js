const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '.env.dev') });

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');

// mongoose.connect(process.env.MONGO_URI);

// app.post('/cat', (req, res) => {
//   const {} = req.body;

//   const Cat = mongoose.model('Cat', { name: String });
//   const kitty = new Cat({ name: 'Zildjian' });
//   kitty.save().then(() => console.log('meow'));

//   res.send();
// });

// app.get('/health-check', (req, res) => {
//   res.send('hello world');
// });

router('/v3', app);

app.listen(3000, () => console.log('listening to 3000....'));
