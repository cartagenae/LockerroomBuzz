const express= require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const users = [
  {id: 1, first: 'John', last: 'Doe'},
  {id: 2, first: 'Alexander', last: 'Richards'},
  {id: 3, first: 'Raymond', last: 'Jefferson'}
];

app.get('/users', (req, res, next) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
