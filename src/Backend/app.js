const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();

mongoose.connect('mongodb://localhost:27017/notesapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// User routes
const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

// Note routes
const noteRoutes = require('./routes/note');
app.use('/note', noteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
