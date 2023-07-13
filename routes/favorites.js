const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// const Favorite = require('../models/favorite');
// const Nursery = require('../models/nursery');

// Get all favorites for a user
router.get('/:userId', async (req, res) => {
  try {
    const favorites = await prisma.favorite.findMany({
      where: {
        user_id: req.params.userId,
      },
      include: {
        nursery: true,
      },
    });
    if (!favorites || favorites.length === 0) {
      res.status(404).json({ message: 'Favorites not found' });
    } else {
      res.json(favorites);
      console.log(favorites);
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: 'An error occurred while retrieving favorites' });
  }
});

// Add a favorite
router.post('/', async (req, res) => {
  console.log('POST / received');
  // Check if the favorite already exists
  const existingFavorite = await prisma.favorite.findMany({ 
    where: {
      user_id: req.body.user_id,
      nursery_id: req.body.nursery_id,
    },
  });

  if (existingFavorite.length>0) {
    // If the favorite already exists, send an appropriate response
    res.status(400).json({ message: 'Favorite already exists' });
  } else {
    // Otherwise, create the new favorite
    const newFavorite = await prisma.favorite.create({
      data:{
      user_id: req.body.user_id,
      nursery_id: req.body.nursery_id,
      },
    });
    res.json(newFavorite);
  }
});

// Delete a favorite

router.delete('/:userId/:nurseryId', async (req, res) => {
// router.delete('/', async (req, res) => {
  console.log(`DELETE received`);
  // console.log(`DELETE /${req.params.userId}/${req.params.nurseryId} received`);
  
  // Check if the favorite to delete exists
  const favorite = await prisma.favorite.findFirst({
    where: {
      user_id: req.body.user_id,
      nursery_id: req.body.nursery_id,
    },
  });

  if (favorite) {
    // If the favorite exists, delete it
    await prisma.favorite.delete({
      where: { id: favorite.id },  // Using the unique id of the favorite
    });
    res.json({ message: 'Favorite removed' });
  } else {
    // If the favorite does not exist, send an appropriate response
    res.status(404).json({ message: 'Favorite not found' });
  }
});

module.exports = router;
