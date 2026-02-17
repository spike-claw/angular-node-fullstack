# Angular + Node.js Full-Stack App

A modern full-stack application built with Angular (frontend) and Node.js/Express (backend).

## Features

- **Frontend**: Angular with standalone components, signals, and HttpClient
- **Backend**: Node.js Express API with CORS support
- **Deployment**: Optimized for Vercel with serverless functions

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

### Frontend
```bash
cd frontend
npm install
npm start
```

Navigate to `http://localhost:4200/`

## Deployment

This app is configured for Vercel deployment:

```bash
vercel deploy
```

## Technologies

- Angular 21+
- Node.js
- Express.js
- TypeScript
- RxJS
