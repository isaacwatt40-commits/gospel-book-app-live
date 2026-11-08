const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5173;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.mjs': 'text/javascript; charset=UTF-8',
  '.ts': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/') {
    reqPath = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, reqPath);

  // Security check: ensure path is within PUBLIC_DIR
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Access Denied');
    return;
  }

  const tryServe = (targetPath) => {
    fs.stat(targetPath, (err, stats) => {
      if (!err && stats.isFile()) {
        const ext = path.extname(targetPath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache'
        });
        const readStream = fs.createReadStream(targetPath);
        readStream.pipe(res);
        return;
      }

      // Check alternative path inside public folder
      const altPublicPath = path.join(PUBLIC_DIR, 'public', reqPath);
      if (targetPath !== altPublicPath && fs.existsSync(altPublicPath) && fs.statSync(altPublicPath).isFile()) {
        const ext = path.extname(altPublicPath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache'
        });
        fs.createReadStream(altPublicPath).pipe(res);
        return;
      }

      // Check covers folder fallback
      if (reqPath.includes('covers')) {
        const coverFilename = path.basename(reqPath);
        const altCoverPath = path.join(PUBLIC_DIR, 'covers', coverFilename);
        if (fs.existsSync(altCoverPath) && fs.statSync(altCoverPath).isFile()) {
          const ext = path.extname(altCoverPath).toLowerCase();
          const contentType = MIME_TYPES[ext] || 'application/octet-stream';
          res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache'
          });
          fs.createReadStream(altCoverPath).pipe(res);
          return;
        }
      }

      // Fallback to index.html for SPA routes if not an asset
      const ext = path.extname(reqPath);
      if (!ext || ext === '.html') {
        const indexPath = path.join(PUBLIC_DIR, 'index.html');
        fs.readFile(indexPath, (readErr, content) => {
          if (readErr) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.end(content);
        });
        return;
      }

      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File Not Found');
    });
  };

  tryServe(filePath);
});

const os = require('os');
server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n  ✨ Gospel Books App is running!`);
  console.log(`  ➜ Local (this PC):     http://localhost:${PORT}`);
  
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        console.log(`  ➜ Network (phones/LAN): http://${net.address}:${PORT}`);
      }
    }
  }
  console.log(`  ➜ Note: Phones must be on the same Wi-Fi/Hotspot.\n`);
});

