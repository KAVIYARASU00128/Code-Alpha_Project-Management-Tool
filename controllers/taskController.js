const Task = require('../models/Task');

exports.createTask = async (req, res, next) => {
  try {
    const { title, description, assignedTo, project, status } = req.body;
    const task = new Task({ title, description, assignedTo, project, status });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

exports.getTasksByProject = async (req, res, next) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId }).populate('assignedTo', 'username email');
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { title, description, assignedTo, status } = req.body;
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.title = title || task.title;
    task.description = description || task.description;
    task.assignedTo = assignedTo || task.assignedTo;
    task.status = status || task.status;
    await task.save();

    res.json(task);
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (error) {
    next(error);
  }
};
