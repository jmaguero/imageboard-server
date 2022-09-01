const { Router } = require("express");
const userModel = require("../models").userModel;

const userRouter = new Router();

userRouter.get("/users", async (req, res) => {
  const users = await userModel.findAll();
  res.send(users)
})

module.exports = userRouter;