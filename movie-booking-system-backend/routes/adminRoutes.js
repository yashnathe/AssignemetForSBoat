const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/addScreen', authMiddleware, adminController.addScreen);
router.post('/addMovie', authMiddleware, adminController.addMovie);

module.exports = router;
