require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./sequelize'); // Use the sequelize instance from sequelize.js

console.log("process.env", process.env.DATABASE_URL );
console.log("sequelize instance: ", sequelize);

sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to PostgreSQL:', err);
  });

const nurseriesRouter = require('./routes/nurseries');
const favoritesRouter = require('./routes/favorites');

app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://hoiku-front1.vercel.app',
      'https://hoiku-front1.vercel.app/?code=l2Le745TzhYLin1q9JBG&state=3WclQ28fxzNo&liffClientId=1661542735&liffRedirectUri=https%3A%2F%2Fhoiku-front1.vercel.app%2F&liffIsEscapedFromApp=true'
      // 他の許可するオリジンを追加
    ];
    // originが許可するリストに存在しない場合、CORSエラーを生成
    if (!origin || allowedOrigins.indexOf(new URL(origin).origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('CORS policy: This origin is not allowed'))
    }
  },
  credentials: true,
}))

app.use(express.json());

app.use('/api/nurseries', nurseriesRouter);
app.use('/api/favorites', favoritesRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
