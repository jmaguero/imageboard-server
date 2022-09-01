const { Router } = require("express");
const imageModel = require("../models").imageModel;

const imageRouter = new Router();

imageRouter.get("/images", async (req, res) => {
  const images = await imageModel.findAll();
  res.send(images)
})


module.exports = imageRouter;