const express = require('express')
const app = express();
const mongoose = require('mongoose');
const Todo = require("../models/Todo.js")

await mongoose.connect('mongodb://127.0.0.1:27017/test');
const PORT = 3000;

app.get('/', (req, res) => {
  const todo = new Todo({ title: "1", desc: "Description of this todo", isDone: false , days: Math.floor(Math.random() * 45)})
  todo.save()
  res.send('Hello from Express backend!');
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at ${PORT}`);
});