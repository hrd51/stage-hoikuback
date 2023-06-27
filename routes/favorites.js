const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorites');
const Nursery = require('../models/nursery');

router.get('/:userId', async (req, res) => {
  const favorites = await Favorite.findAll({
    where: {
      user_id: req.params.userId
    },
    include: [{
      model: Nursery
    }]
  });

  res.json(favorites);
});

router.post('/', async (req, res) => {
  const newFavorite = await Favorite.create({
    user_id: req.body.userId,
    nursery_id: req.body.nurseryId
  });

  res.json(newFavorite);
});

router.put('/', async (req, res) => {
    const favorite = await Favorite.findOne({
      where: {
        user_id: req.body.userId,
        nursery_id: req.body.nurseryId
      }
    });
  
    if (favorite) {
      await favorite.destroy();
      res.json({ message: "Favorite removed" });
    } else {
      const newFavorite = await Favorite.create({
        user_id: req.body.userId,
        nursery_id: req.body.nurseryId
      });
      res.json(newFavorite);
    }
  });
  

module.exports = router;
