const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  demoLink: String,
  githubLink: String
});

module.exports = mongoose.model('Project', projectSchema);
