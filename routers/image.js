const { Router } = require("express");
const imageModel = require("../models").imageModel;

const imageRouter = new Router();

imageRouter.get("/images", async (req, res) => {
  try {
    const images = await imageModel.findAll();
    res.send(images)
  } catch (error) {
    console.log(error)
  }
});

imageRouter.post("/images", async (req, res) => {
  try {
    const { title, url } = req.body;
    const createImage = await imageModel.create({ title: title, url: url });
    res.send(createImage);
  } catch (error) {
    console.log(error)
  }
});

imageRouter.get("/images/:getImage", async (req, res) => {
  try {
    const imageName = req.params.getImage
    const getImage = await imageModel.findOne({ where: { title: imageName } })
    res.send(getImage)
  } catch (error) {
    console.log(error);
  }
})

module.exports = imageRouter;