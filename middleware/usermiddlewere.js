const createError = require("../utils/createError");
const { Todo } = require("../models");
exports.getuserbyId = async (req, res, next) => {
  const { id } = req.params;
  //   console.log(id);
  try {
    const isuser = await Todo.findOne({ where: { userId: id } });

    // console.log(todo);
    if (!isuser) {
      console.log(isuser);
      return createError({ message: "user not found", statuscode: 404 });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
