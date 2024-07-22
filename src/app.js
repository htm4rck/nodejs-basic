// src/app.js

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

// Importar rutas
const userRoutes = require('./routes/userRoutes');

// Inicializar la app
const app = express();

//Credenciales de bd
//const dbURI = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;

// Conectar a MongoDB
mongoose.connect('mongodb://root:123456789@127.0.0.1:27017/store', {
  useNewUrlParser: true,
  authSource: 'admin', // Cambia 'admin' si el usuario está en una base de datos diferente
  useUnifiedTopology: true,
  // Eliminar useCreateIndex si está presente
  // useCreateIndex: true,
}).then(() => {
  console.log("Conexión exitosa a MongoDB");
}).catch((err) => {
  console.error("Error conectando a MongoDB:", err);
});

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'An error occurred!', error: err.message });
});

module.exports = app;
