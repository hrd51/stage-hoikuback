const express = require('express');
const router = express.Router();
const Nursery = require('../models/nursery');

//ゲットリクエストを処理するエンドポイント
router.get('/', async (req, res) => {
  const nurseries = await Nursery.findAll();
  res.json(nurseries);
});

module.exports = router;
