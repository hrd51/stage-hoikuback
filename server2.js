require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
// const { PrismaClient } = require('@prisma/client');

// const sequelize = require('./sequelize'); // Use the sequelize instance from sequelize.js

// Placed CORS middleware before other middleware
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        // 'http://localhost:3001',
        'https://stage-hoiku-zknj.vercel.app',
       
      ];
      // originが許可するリストに存在しない場合、CORSエラーを生成
      if (!origin || allowedOrigins.indexOf(new URL(origin).origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy: This origin is not allowed'));
      }
    },
    credentials: true,
  })
);
//
console.log('process.env', process.env.DATABASE_URL);


const nurseriesRouter = require('./routes/nurseries');
const favoritesRouter = require('./routes/favorites');

app.use(express.json());

app.use('/api/nurseries', nurseriesRouter);
app.use('/api/favorites', favoritesRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.header('Access-Control-Allow-Origin', '*'); // <-- CORS header
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
