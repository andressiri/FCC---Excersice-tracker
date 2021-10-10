const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

// initial setup.
app.use(cors());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

// connect to MongoDB Atlas database.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// set database's user Schema.
const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  description: [String],
  duration: Number,
  date: Date
});

// set database's user model.
const User = mongoose.model('User', userSchema);


