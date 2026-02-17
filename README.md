# Angular + Node.js Full-Stack App

A modern full-stack application built with Angular (frontend) and Node.js/Express (backend).

🔗 **Live Demo**: Deploy to Vercel using the button below

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/spike-claw/angular-node-fullstack)

## Features

- **Frontend**: Angular 21+ with standalone components, signals, and HttpClient
- **Backend**: Node.js Express API with CORS support
- **Deployment**: Optimized for Vercel with serverless functions
- **TypeScript**: Full type safety across the stack
- **Real-time**: API endpoints with live data updates

## Project Structure

```
angular-node-app/
├── frontend/          # Angular application
│   ├── src/
│   │   └── app/
│   └── angular.json
├── backend/           # Node.js Express API
│   ├── server.js
│   └── package.json
└── vercel.json        # Vercel deployment configuration
```

## API Endpoints

- `GET /api/hello` - Returns a greeting message with timestamp
- `GET /api/status` - Returns server status and uptime
- `POST /api/echo` - Echoes back the request body
- `GET /api` - Health check endpoint

## Local Development

### Backend
```bash
cd backend
npm install
npm start
```
Server runs on `http://localhost:3000`

### Frontend
```bash
cd frontend
npm install
npm start
```
Navigate to `http://localhost:4200/`

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option 2: Using GitHub Integration

1. Fork or clone this repository
2. Import your repository to Vercel
3. Vercel will automatically detect the configuration
4. Click "Deploy"

### Build Configuration

The project includes a `vercel.json` configuration file that handles:
- Angular frontend serving from `/frontend/dist/frontend/browser`
- Node.js backend API at `/api/*` routes
- Automatic redirects and routing

## Environment Variables

No environment variables are required for basic deployment. The app works out of the box!

## Technologies

- **Frontend**:
  - Angular 21+
  - TypeScript 5.9+
  - RxJS 7.8+
  - Standalone Components
  - Signals API

- **Backend**:
  - Node.js 22+
  - Express.js 4.x
  - CORS middleware

## License

MIT
