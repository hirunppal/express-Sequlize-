const express = require("express");
// const Rooute from
const todoRoute = require("./Routes/todoRoute");
const userRoute = require("./Routes/userRoute");

//MiddleWare
const notfoundmiddle = require("./middleware/notfound-mdw");
const errorMiddleware = require("./middleware/erroemid");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//
//SRS   REST API handle resorces todo
// Create , Update , Delete , Getall ,GetbyId
app.use("/todos", todoRoute);
app.use("/users", userRoute);

//Rest ApI : Handle Resorce User
//Create , Update

app.use(notfoundmiddle);
app.use(errorMiddleware);
//
const port = 8003;
app.listen(port, () => {
  console.log("welcome to port" + port);
});
