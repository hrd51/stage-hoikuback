const express = require('express');
const router = express.Router();
const Nursery = require('../models/nursery');

router.get('/', async (req, res) => {
  // req.query からクエリパラメータを取得します
  const { prefecture, city, operator } = req.query;
  console.log("hoge1")

  // クエリパラメータに基づいて検索条件を設定します
  const where = {};
  if (prefecture) where.prefecture = prefecture;
  if (city) where.city = city;
  if (operator) where.operator = operator;
console.log("where", where)
  try {
    // 検索条件に一致するデータをデータベースから取得します
    const nurseries = await Nursery.findAll({ where });
    console.log("hogehoge3", nurseries) 

    // 取得したデータをレスポンスとして送信します
    res.json(nurseries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});


module.exports = router;
