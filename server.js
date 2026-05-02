import { inject } from '@vercel/analytics';
import { createServer } from 'http';

// Initialize Vercel Analytics
inject({ mode: process.env.NODE_ENV || 'production' });

// Create HTTP server
const server = createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Basic health check endpoint
  if (req.url === '/' || req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      status: 'ok', 
      message: 'NeuralAI Backend is running',
      analytics: 'enabled',
      timestamp: new Date().toISOString()
    }));
    return;
  }

  // API endpoints for Mercado Pago integration
  if (req.url.startsWith('/api/')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      message: 'API endpoint ready for implementation',
      path: req.url 
    }));
    return;
  }

  // Default 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🚀 NeuralAI Backend server running on port ${PORT}`);
  console.log(`📊 Vercel Analytics: Enabled`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'production'}`);
});
