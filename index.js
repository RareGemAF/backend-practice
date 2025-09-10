const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) =>{
  res.send('This is my about page');
});

app.get('/contact', (req, res) =>{
  res.send('This is my contact page');
});

//Route parameters
app.get('/user/:id', (req, res) =>{
  const query = req.query.id;
  res.send('You searched for: ' + userId);
})

//Query parameters
app.get('/search', (req, res) =>{
  const query = req.query.q;
  res.send('You searched for: ' + query);
})


// JSON response
app.get('/products', (req, res) => {
  const products =[
    {id: 1, name: 'product 1', price: 100},
    {id: 1, name: 'product 2', price: 100},
    {id: 1, name: 'product 3', price: 100},
  ];
  res.json(products)
})





app.listen(port, () => {
  console.log("Server is running on port" + port);
})

