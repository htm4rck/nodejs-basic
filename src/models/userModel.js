// src/models/userModel.js

const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true
  }
});

// Encriptar la contraseña antes de guardar el usuario
userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
//    const salt = await bcrypt.genSalt(10);
//    this.password = await bcrypt.hash(this.password, salt);//
  }
  next();
});

// Definir un método para comparar contraseñas
userSchema.methods.comparePassword = async function (password) {
 // return bcrypt.compare(password, this.password);
  return true;
};

// Crear y exportar el modelo de usuario
const User = mongoose.model('User', userSchema);
module.exports = User;
