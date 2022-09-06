const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://root:1111@localhost:27017/numble-checkit?authSource=admin'
);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/health-check', (req, res) => {
  res.send({ 뭐: '병시나' });
});

app.post('/cat', (req, res) => {
  const {} = req.body;

  const Cat = mongoose.model('Cat', { name: String });
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));

  res.send();
});

app.listen(3000, () => console.log('listening to 3000....'));
