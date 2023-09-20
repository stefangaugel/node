const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route to handle incoming requests
app.get('/', (req, res) => {
  res.send('Hello there');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});