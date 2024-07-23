const http = require('http');
const url = require('url');
const fs = require('fs');

const PAGES = ['/', '/index', '/about', '/contact-me'];

http.createServer((req, res) => {
  const q = url.parse(req.url, true);

  let filename;
  if (!PAGES.includes(q.pathname)) filename = './404.html';
  else 
    q.pathname === '/' ? filename = './index.html' : filename = '.' + q.pathname + '.html';

  fs.readFile(filename, (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end(`${err}`);
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  })
}).listen(8080);