const Comment = require('../models/Comment');

exports.addComment = async (req, res, next) => {
  try {
    const { content, task } = req.body;
    const user = req.user._id;
    const comment = new Comment({ content, task, user });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

exports.getCommentsByTask = async (req, res, next) => {
  try {
    const comments = await Comment.find({ task: req.params.taskId }).populate('user', 'username');
    res.json(comments);
  } catch (error) {
    next(error);
  }
};
