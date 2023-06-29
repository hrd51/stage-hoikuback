const express = require('express');
const router = express.Router();
const Favorite = require('../models/favorites');
const Nursery = require('../models/nursery');

// Get all favorites for a user
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
  console.log(favorites)
});

// Add a favorite
router.post('/', async (req, res) => {
  // Check if the favorite already exists
  const existingFavorite = await Favorite.findOne({
    where: {
      user_id: req.body.userId,
      nursery_id: req.body.nurseryId
    }
  });

  if (existingFavorite) {
    // If the favorite already exists, send an appropriate response
    res.status(400).json({ message: "Favorite already exists" });
  } else {
    // Otherwise, create the new favorite
    const newFavorite = await Favorite.create({
      user_id: req.body.userId,
      nursery_id: req.body.nurseryId
    });
    res.json(newFavorite);
  }
});

// Delete a favorite
router.delete('/:userId/:nurseryId', async (req, res) => {
  // Find the favorite to delete
  const favorite = await Favorite.findOne({
    where: {
      user_id: req.params.userId,
      nursery_id: req.params.nurseryId
    }
  });

  if (favorite) {
    // If the favorite exists, delete it
    await favorite.destroy();
    res.json({ message: "Favorite removed" });
  } else {
    // Otherwise, send an appropriate response
    res.status(404).json({ message: "Favorite not found" });
  }
});

module.exports = router;
