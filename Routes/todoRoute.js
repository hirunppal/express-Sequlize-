const express = require("express");
const { append } = require("express/lib/response");
const todoController = require("../controller/todoController");
const router = express.Router();
const usermiddlewere = require("../middleware/usermiddlewere");

router.post("/create/", todoController.createtodo);
router.put("/update/:id", todoController.updatetodoAEARTH);
router.get("/:id", usermiddlewere.getuserbyId, todoController.getAlltodo);
router.get(
  "/:id/:todoid",
  usermiddlewere.getuserbyId,
  todoController.getonetodo
);
router.delete(
  "/:id/:todoid",
  usermiddlewere.getuserbyId,
  todoController.deloneTodo
);

module.exports = router;
