const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  // req.query からクエリパラメータを取得します
  const { prefecture, city, operator } = req.query;

  // クエリパラメータに基づいて検索条件を設定します
  const where = {};
  if (prefecture) where.prefecture = prefecture;
  if (city) where.city = city;
  if (operator) where.operator = operator;

  try {
    // 検索条件に一致するデータをデータベースから取得します
    const nurseries = await prisma.nursery.findMany({ where });

    // 取得したデータをレスポンスとして送信します
    res.json(nurseries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

module.exports = router;
