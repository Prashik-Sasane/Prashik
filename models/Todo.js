const TodoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean,
    days: Number
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo

