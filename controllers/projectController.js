const Project = require('../models/Project');

exports.createProject = async (req, res, next) => {
  try {
    const { title, description, members } = req.body;
    const project = new Project({ title, description, members });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().populate('members', 'username email');
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

exports.getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id).populate('members', 'username email');
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    next(error);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const { title, description, members } = req.body;
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    project.title = title || project.title;
    project.description = description || project.description;
    project.members = members || project.members;
    await project.save();

    res.json(project);
  } catch (error) {
    next(error);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    await project.remove();
    res.json({ message: 'Project deleted' });
  } catch (error) {
    next(error);
  }
};
