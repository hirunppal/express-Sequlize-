const { sequelize, User, Todo } = require("./models");
// sequelize.sync({ focus: true });
const run = async () => {
  try {
    const user = await User.create({
      username: "KonanToo",
      password: "123456789",
      bitrhDate: "2020-02-12",
      email: "lollol@gmail.com",
    });
    const todo = await Todo.create({
      title: "Foodball",
      completed: false,
      userId: user.id,
    });
  } catch (err) {
    console.log(err);
  }
};
// run();
