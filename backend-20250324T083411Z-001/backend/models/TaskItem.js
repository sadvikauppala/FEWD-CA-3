const mongoose = require("mongoose");

const TaskItemSchema = new mongoose.Schema({
  task: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TaskItem", TaskItemSchema);
