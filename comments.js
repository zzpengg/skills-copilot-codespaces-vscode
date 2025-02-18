// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  'This is awesome!',
  'I love this!',
  'This is so cool!',
  'I like this!'
];

// Create a route for getting comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Create a route for posting comments
app.post('/comments', (req, res) => {
  comments.push('New comment');
  res.send('Comment posted!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});