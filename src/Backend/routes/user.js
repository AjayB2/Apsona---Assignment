const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error logging in' });
  }
});

module.exports = router;
