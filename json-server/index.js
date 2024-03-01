const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const https = require('https');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const HTTP_PORT = 8080;
const HTTPS_PORT = 8443;

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
// server.use(async (req, res, next) => {
//   await new Promise((resolve) => {
//     setTimeout(resolve, 800);
//   });
//   next();
// });

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

if (!process.env.skipHttps) {
  const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/vmishakin.ru/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/vmishakin.ru/fullchain.pem'),
  };

  const httpsServer = https.createServer(httpsOptions, server);

  httpsServer.listen(HTTPS_PORT, () => {
    console.log(`https server is running on ${HTTPS_PORT} port`);
  });
}

server.listen(HTTP_PORT, () => {
  console.log(`http server is running on ${HTTP_PORT} port`);
});
