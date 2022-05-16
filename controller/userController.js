const createerror = require("../utils/createError");
const { User, Todo } = require("../models");
const { json } = require("express/lib/response");
const user = require("../models/user");
exports.register = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password,
      confirmpassword,
      birthDate = new Date(),
    } = req.body;
    // console.log(req.body);
    if (password != confirmpassword) {
      createerror(400, "password its not match");
    } else {
      // console.log("usercreate start");
      const user = await User.create({
        username,
        email,
        password,
        birthDate,
      });
      res.status(201).json({ message: "Register Suceeed" });
    }
  } catch (err) {
    next(err);
  }
};
exports.updateuser = async (req, res, next) => {
  // console.log(req.params);

  try {
    const {
      tarid,
      newusername,
      newemail,
      Oldpassword,
      newpassword,
      confirmnewpassword,
      newbirthDate = new Date(),
    } = req.body;

    // const project = await Project.findOne({ where: { title: 'My Title' } });
    // if (project === null) {
    //   console.log('Not found!');
    // } else {
    //   console.log(project instanceof Project); // true
    //   console.log(project.title); // 'My Title'
    // }

    const user = await User.findOne({ where: { id: tarid } });
    if (user === null) {
      createerror(404, "Users Not Found");
    } else {
      console.log("found the user");

      if (Oldpassword === user.password) {
        console.log("you are loggin with password");
        // console.log(user);
        if (newpassword != confirmnewpassword) {
          createerror(400, "password its not match");
        } else {
          // console.log(newpassword);
          // console.log(newbirthDate);
          const proj = await user.update(
            {
              password: newpassword,
              birthDate: newbirthDate,
              email: newemail,
            },
            { where: { id: tarid } }
          );
          // console.log(proj);
        }
      } else {
        createerror(400, "Oldpassword is not correct");
      }
    }
    // if (password != confirmpassword) {
    //   createerror(400, "password its not match");
    // } else {
    //   // console.log("usercreate start");
    //   const user = await User.create({
    //     username,
    //     email,
    //     password,
    //     birthDate,
    //   });
    //   res.status(201).json({ message: "Register Suceeed" });
    // }
  } catch (err) {
    next(err);
  }
};
