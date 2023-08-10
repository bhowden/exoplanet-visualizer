const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html'; // Serve index.html by default
  }

  const contentType = getContentType(filePath);
  const stream = fs.createReadStream(filePath);

  stream.on('open', () => {
    res.setHeader('Content-Type', contentType);
    stream.pipe(res);
  });

  stream.on('error', (err) => {
    res.statusCode = 404;
    res.end(`File not found: ${err.message}`);
  });
});

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.js':
      return 'text/javascript';
    case '.css':
      return 'text/css';
    case '.json':
      return 'application/json';
    default:
      return 'application/octet-stream';
  }
}

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});