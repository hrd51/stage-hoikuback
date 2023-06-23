const express = require('express');
const { Sequelize } = require('sequelize');

const nurseriesRouter = require('./routes/nurseries');
app.use('/api/nurseries', nurseriesRouter);
//APInurseriesのパスリクをnursery.jsで処理

const app = express();
const port = process.env.PORT || 3000;

// SQLiteへの接続設定
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.development.sqlite'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to SQLite has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to SQLite:', err);
  });

// 省略: ミドルウェアの設定やルーティングの設定


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
