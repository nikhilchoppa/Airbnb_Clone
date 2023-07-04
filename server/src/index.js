const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/event-proposal', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
