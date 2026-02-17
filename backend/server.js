const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello from Node.js!', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'running',
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.post('/api/echo', (req, res) => {
  res.json({ 
    echo: req.body,
    receivedAt: new Date().toISOString()
  });
});

// Health check for Vercel
app.get('/api', (req, res) => {
  res.json({ 
    name: 'Angular + Node.js API',
    status: 'healthy'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
