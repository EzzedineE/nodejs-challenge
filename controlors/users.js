const User = require('../models/user')

exports.createUser = (req, res, next) => {
    delete req.body._id;
    const user = new User({ ...req.body });
    user.save()
        .then((result) => res.status(201).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.modifyUser = (req, res, next) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(400).json({ error }));
}
exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id }).populate('todos')
        .then(users => res.status(200).json(users))
        .catch(error => res.status(404).json({ error }));
}
exports.getAllUser = (req, res, next) => {
    User.find().populate('todos')
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
}
exports.addTodoUser = (req, res, next) =>
// {
//     User.update(
//         { _id: person._id }, 
//         { $push: { friends: friend } },
//         done
//     );
{
    User.findOne({ todos: req.params.idt })
        .then((result) => {
            if (result == null) {
                User.findByIdAndUpdate(req.params.idu, { $push: { todos: req.params.idt } }, { new: true }).populate('todos')
                    .then((resultUpdate) => res.status(200).json(resultUpdate))
                    .catch(error => res.status(400).json({ error }));
            } else {
                res.status(404).json({ msg: "todo exists in another user" })
            }

        })
        .catch((err) => { res.status(500).json(err) })
    // User.findByIdAndUpdate(req.params.idu, { $push: { todos: req.params.idt } }, { new: true }).populate('todos')
    //     .then((result) => res.status(200).json(result))
    //     .catch(error => res.status(400).json({ error }));
}
exports.deleteTodoUser = (req, res, next) => {
    User.findByIdAndUpdate(req.params.idu, { $pull: { todos: req.params.idt } }, { new: true })
        .then((result) => res.status(200).json(result))
        .catch(error => res.status(400).json({ error }));
}