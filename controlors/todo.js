const todo = require('../models/todo');
const ToDo = require('../models/todo')

exports.createTodo = (req, res, next) => {
    delete req.body._id;
    const todo = new ToDo({
        ...req.body
    });
    todo.save()
        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.modifyTodo = (req, res, next) => {
    ToDo.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.deleteTodo = (req, res, next) => {
    ToDo.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json(resu))
        .catch(error => res.status(400).json({ error }));
}
exports.getOneTodo = (req, res, next) => {
    ToDo.findOne({ _id: req.params.id })
        .then(todos => res.status(200).json(todos))
        .catch(error => res.status(404).json({ error }));
}
exports.getAllTodo = (req, res, next) => {
    ToDo.find()
        .then(todos => res.status(200).json(todos))
        .catch(error => res.status(400).json({ error }));
}