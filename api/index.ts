// Vercel serverless function entry point
// Types are available at runtime in Vercel
// @ts-expect-error - Vercel types available at runtime
import type { VercelRequest, VercelResponse } from '@vercel/node';
// @ts-expect-error - Express types available at runtime
import express, { type Request, type Response, type NextFunction } from 'express';
// @ts-expect-error - Node built-in modules available at runtime
import * as path from 'path';
// @ts-expect-error - Node built-in modules available at runtime
import * as fs from 'fs';

const app = express();

// Middleware
app.use(express.json({
  verify: (req: any, _res: any, buf: any) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const reqPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson: any, ...args: any[]) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on('finish', () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith('/api')) {
      console.log(`${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`);
    }
  });

  next();
});

// API routes (must come before static files)
app.use('/api', (req: Request, res: Response, next: NextFunction) => {
  // API routes would go here
  // For now, return 404 for API routes that don't exist
  res.status(404).json({ message: 'API endpoint not found' });
});

// Serve index.html for SPA routing (Vercel serves static files directly)
function setupSPARouting(app: express.Express) {
  // For SPA routing, serve index.html for all non-API routes
  app.get('*', (req: Request, res: Response, next: NextFunction) => {
    // Skip API routes
    if (req.path.startsWith('/api')) {
      return next();
    }
    
    // Skip static asset requests (these are handled by Vercel directly)
    if (req.path.match(/\.(js|css|ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|json|map)$/)) {
      return next();
    }
    
    // Try to serve index.html from dist/public
    // @ts-expect-error - process is available at runtime
    const cwd = typeof process !== 'undefined' ? process.cwd() : '/';
    const possiblePaths = [
      path.join(cwd, 'dist', 'public', 'index.html'),
      path.join(cwd, 'public', 'index.html'),
    ];
    
    for (const indexPath of possiblePaths) {
      try {
        if (fs.existsSync(indexPath)) {
          return res.sendFile(indexPath);
        }
      } catch (e) {
        // Continue to next path
      }
    }
    
    // If index.html not found, return 404
    res.status(404).send('Page not found');
  });
}

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });
});

// Initialize app
let initialized = false;

async function init() {
  if (initialized) return;
  
  // Setup SPA routing (serve index.html for non-API routes)
  setupSPARouting(app);
  
  initialized = true;
}

// Vercel serverless function handler
export default async function handler(req: VercelRequest, res: VercelResponse) {
  await init();
  return app(req as any, res as any);
}