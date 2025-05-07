// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON data from requests

// POST request to handle message submission
app.post('/api/sendMessage', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Simulate saving the message (for example, you could store it in a database)
  console.log('Message received:', req.body);

  // Send a success response
  res.status(200).json({ success: 'Message sent successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
