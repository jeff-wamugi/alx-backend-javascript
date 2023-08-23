const express = require('express');
const app = express();

app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.status(200)
    .send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.status(200)
    .send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  const paymentObj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.json(paymentObj);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;

  res.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865')
});
