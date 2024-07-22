// src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para registrar un usuario
router.post('/register', userController.registerUser);

// Ruta para iniciar sesión de usuario
router.post('/login', userController.loginUser);

module.exports = router;
