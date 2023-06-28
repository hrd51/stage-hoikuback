const express = require('express');
const cors = require('cors');

const app = express();
const { Sequelize } = require('sequelize');

const nurseriesRouter = require('./routes/nurseries');
const favoritesRouter = require('./routes/favorites');

app.use(cors({
  origin: 'https://hoiku-front1.vercel.app', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))
app.use(express.json());

app.use('/api/nurseries', nurseriesRouter);
app.use('/api/favorites', favoritesRouter);

//APInurseriesのパスリクをnursery.jsで処理

const port = process.env.PORT || 3000;

// PostgreSQLへの接続設定
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false,
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
