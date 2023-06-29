require('dotenv').config();

const express = require('express');
const cors = require('cors');
console.log("process.env", process.env.DATABASE_URL );

const app = express();
const { Sequelize } = require('sequelize');

// PostgreSQLへの接続設定
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {},
  logging: false,
});

console.log("sequelize instance: ", sequelize); // Add this line to check the sequelize instance

sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to PostgreSQL:', err);
  });

// Now that sequelize instance is created, import the routers
const nurseriesRouter = require('./routes/nurseries');
const favoritesRouter = require('./routes/favorites');

app.use(cors({
  origin: 'https://hoiku-front1.vercel.app', 
  credentials: true,
}))
app.use(express.json());

app.use('/api/nurseries', nurseriesRouter);
app.use('/api/favorites', favoritesRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports.sequelize = sequelize; // Fix this line to export the sequelize instance correctly
