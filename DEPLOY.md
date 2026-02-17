# Deployment Guide

## Quick Deploy to Vercel

### Method 1: One-Click Deploy (Recommended)

Click the button below to deploy this project to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/spike-claw/angular-node-fullstack)

### Method 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd /path/to/angular-node-app
vercel --prod
```

### Method 3: GitHub Integration

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import from GitHub: `spike-claw/angular-node-fullstack`
4. Configure:
   - **Framework Preset**: Other
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Output Directory**: `frontend/dist/frontend/browser`
   - **Install Command**: `cd frontend && npm install && cd ../backend && npm install`
5. Click "Deploy"

## Build Commands

The project uses these build settings:

- **Root Directory**: `./`
- **Build Command**: `cd frontend && npm run build`
- **Output Directory**: `frontend/dist/frontend/browser`
- **Install Command**: `npm install --prefix frontend && npm install --prefix backend`

## Environment Configuration

No environment variables are required! The application works out of the box.

## Verifying Deployment

After deployment, test your API endpoints:

- `https://your-app.vercel.app/api/hello`
- `https://your-app.vercel.app/api/status`
- `https://your-app.vercel.app/` (Angular frontend)

## Troubleshooting

### Build Fails

1. Ensure both `frontend` and `backend` directories have `package.json`
2. Check that `vercel.json` is in the root directory
3. Verify Node.js version is compatible (18.x or higher)

### API Routes Not Working

1. Ensure `vercel.json` routes configuration is correct
2. Check that backend server.js exports the app: `module.exports = app`
3. Verify CORS is enabled in backend

### Frontend Not Loading

1. Check that Angular build output is in `frontend/dist/frontend/browser`
2. Verify `index.html` exists in the output directory
3. Check browser console for errors

## Alternative Deployment Options

### Netlify

While this project is optimized for Vercel, you can also deploy to Netlify:

1. Build the frontend: `cd frontend && npm run build`
2. Deploy `frontend/dist/frontend/browser` as a static site
3. Deploy backend separately to a Node.js hosting service
4. Update API URLs in the frontend code

### Railway / Render

For traditional Node.js hosting:

1. Deploy the entire repository
2. Set start command: `cd backend && npm start`
3. Serve frontend as static files from backend
4. Add Express static middleware to serve Angular app

## Success Criteria

After successful deployment, you should see:

✅ Angular app loads with styled UI
✅ "Hello from Node.js!" message appears
✅ Server status shows uptime
✅ Both API calls work without CORS errors

---

**Note**: The first deployment may take 2-3 minutes as Vercel builds both frontend and backend.
