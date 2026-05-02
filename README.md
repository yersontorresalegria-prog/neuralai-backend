# NeuralAI Backend

NeuralAI Backend with Mercado Pago integration and Vercel Web Analytics.

## Features

- ✅ Node.js HTTP server
- ✅ Vercel Web Analytics integrated
- ✅ CORS enabled
- ✅ Health check endpoint
- ✅ Ready for Mercado Pago integration

## Setup

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

The server will start on port 3000 (or the PORT environment variable).

### Endpoints

- `GET /` - Health check
- `GET /health` - Health check
- `GET /api/*` - API endpoints (ready for implementation)

## Vercel Web Analytics

This project includes Vercel Web Analytics configured and ready to use.

### Setup Analytics in Vercel Dashboard

1. Go to your project in Vercel Dashboard
2. Navigate to Analytics tab
3. Click "Enable Web Analytics"
4. Deploy your project

### How it works

The analytics are automatically injected using the `@vercel/analytics` package in `server.js`:

```javascript
import { inject } from '@vercel/analytics';
inject({ mode: process.env.NODE_ENV || 'production' });
```

Analytics will track:
- Page views
- Custom events
- Performance metrics

## Deployment

### Deploy to Vercel

```bash
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

## License

ISC
