// src/server.js

const app = require('./app');
const config = require('./config/config');

// Get the port from configuration or environment variable
const PORT = config.port || process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
