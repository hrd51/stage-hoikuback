require('dotenv').config();

const express = require('express');
const cors = require('cors');
console.log("process.env", process.env.DATABASE_URL );

const app = express();
const { Sequelize } = require('sequelize');

const nurseriesRouter = require('./routes/nurseries');
const favoritesRouter = require('./routes/favorites');

app.use(cors({
  origin: 'https://hoiku-front1.vercel.app', //アクセス許可するオリジンをローカルのものに変更
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  // optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))
app.use(express.json());

app.use('/api/nurseries', nurseriesRouter);
app.use('/api/favorites', favoritesRouter);

//APInurseriesのパスリクをnursery.jsで処理

const port = process.env.PORT || 3000;

console.log("process.env", process.env.DATABASE_URL );
// PostgreSQLへの接続設定
// constructor(database: string, username: string, password?: string, options?: Options);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  // sslを無効化
  dialectOptions: {},
  logging: false,
});

module.exports.sequelize = {sequelize}

sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to PostgreSQL:', err);
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});