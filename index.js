const express = require('express');
const path = require('path');
// const url = require('url');
const fs = require('fs');

const app = express();
const PAGES = ['/', '/index', '/about', '/contact-me'];

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Did it work?'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, '/about.html')));
app.get('/contact-me', (req, res) => res.sendFile(path.join(__dirname, '/contact-me.html')));

app.use((req, res, next) => res.sendFile(path.join(__dirname, '/404.html')));


// app.get('/',(req, res) => {
//   const data = readHTML('./index.html');
//   if (data) {
//     res.send(data);
//   }
// });

// app.get('/about',(req, res) => {
//   const data = readHTML('./about.html');
//   if (data) {
//     res.send(data);
//   }
// });

// app.get('/contact-me',(req, res) => {
//   const data = readHTML('./contact-me.html');
//   if (data) {
//     res.send(data);
//   }
// });


// function readHTML(filename) {
//   fs.readFile(filename, (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     return data;
//   });
// }

// http.createServer((req, res) => {
//   const q = url.parse(req.url, true);

//   let filename;
//   if (!PAGES.includes(q.pathname)) filename = './404.html';
//   else 
//     q.pathname === '/' ? filename = './index.html' : filename = '.' + q.pathname + '.html';

//   fs.readFile(filename, (err, data) => {
//     if (err) {
//       console.error(err);
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end(`${err}`);
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   })
// }).listen(8080);