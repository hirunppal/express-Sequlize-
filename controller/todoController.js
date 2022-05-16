const { User, Todo } = require("../models");
const createError = require("../utils/createError");

exports.createtodo = async (req, res, next) => {
  try {
    const { title, completed, userId, dueDate } = req.body;
    const user = await User.findOne({ where: { id: userId ?? 0 } });
    if (!user) {
      res.status(404).json({ message: "User (todo host id)is not found" });
    }

    await Todo.create({ title, completed, userId });
    res.status(201).json({ message: "Create todo list Suceeed" });
  } catch (err) {
    next(err);
  }
};
exports.updatetodoAEARTH = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, completed, dueDate, userId } = req.body;
    // if (!title) {
    //   newValue.title = title;
    // }
    // if (!completed) {
    //   newValue.completed = completed;
    // }
    // if (!dueDate) {
    //   newValue.dueDate = dueDate;
    // }
    const result = await Todo.update(
      { title, completed, dueDate },
      { where: { id: id } }
    );
    if (result[0] === 0) {
      createError("todo is not updated ", 400);
    }
  } catch (err) {
    next(err);
  }
};
exports.updatetodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, completed, dueDate, userId } = req.body;
    const todo = await Todo.findOne({ where: { id: id } });
    console.log(todo);
    if (!todo) {
      console.log(todo);
      return createError({ message: "todo not found", statuscode: 404 });
    } else {
      await Todo.update(
        { title: title, completed: completed },
        { where: { id: id } }
      );
      res.status(201).json({ message: "Updated list Suceeed ID :" + id });
    }
  } catch (err) {
    next(err);
  }
};

exports.getAlltodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findAll({ where: { userId: id } });
    console.log(todo);
    if (!todo) {
      console.log(todo);
      return createError({ message: "user not found", statuscode: 404 });
    } else {
      res.status(200).json({ result: todo, total: todo.length });
    }
  } catch (err) {
    next(err);
  }
};
exports.getonetodo = async (req, res, next) => {
  try {
    const { id, todoid } = req.params;
    const todo = await Todo.findOne({ where: { userId: id } });
    if (!todo) {
      return createError({ message: "todo not found", statuscode: 404 });
    } else {
      res.status(200).json({ result: todo, total: todo.length });
    }
  } catch (err) {
    next(err);
  }
};

exports.deloneTodo = async (req, res, next) => {
  try {
    const { todoid } = req.params;
    const todo = await Todo.destroy({ where: { id: todoid } });
    res.status(200).json({ message: "todo has been delete" });
  } catch (err) {
    next(err);
  }
};
