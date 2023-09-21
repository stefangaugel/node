module.exports = function module1() {
    return 'Hello from module1!';
  };


module.exports = function module2() {
    return 'Hello from module2!';
  };
  
const module1 = require('./module1');
const module2 = require('./module2');
const express = require("express")

const app = express();
const port = 3000;

// Define a route to handle incoming requests
app.get('/', (req, res) => {
  res.send(module1()+" and "+module2());
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
