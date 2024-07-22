// src/controllers/userController.js

const User = require('../models/userModel');

// Registrar un nuevo usuario
exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, age, email, password } = req.body;

    const newUser = new User({ firstName, lastName, age, email, password });
    await newUser.save();

    res.status(201).send({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user', error: error.message });
  }
};

// Iniciar sesión de usuario
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    res.status(200).send({ message: 'Login successful!' });
  } catch (error) {
    res.status(400).send({ message: 'Error logging in', error: error.message });
  }
};
