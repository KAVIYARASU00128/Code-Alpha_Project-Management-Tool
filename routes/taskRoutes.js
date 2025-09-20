const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const router = express.Router();

router.route('/')
  .post(protect, createTask);

router.route('/project/:projectId')
  .get(protect, getTasksByProject);

router.route('/:id')
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;
