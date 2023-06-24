const express = require('express');
const cors = require('cors');

const app = express();
const { Sequelize } = require('sequelize');

const nurseriesRouter = require('./routes/nurseries');

app.use(cors({
  origin: 'http://localhost:3001', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))

app.use('/api/nurseries', nurseriesRouter);

//APInurseriesのパスリクをnursery.jsで処理


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


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
