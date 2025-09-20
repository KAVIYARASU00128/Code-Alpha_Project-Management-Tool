const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { addComment, getCommentsByTask } = require('../controllers/commentController');
const router = express.Router();

router.post('/', protect, addComment);

router.get('/task/:taskId', protect, getCommentsByTask);

module.exports = router;
