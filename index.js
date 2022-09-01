const express = require('express');
const jsonParser = express.json();
const imageRouter = require("./routers/image")
const userRouter = require("./routers/user")

const PORT = process.env.PORT || 4000;

const app = express();

app.use(jsonParser)

app.use("/", userRouter);
app.use("/", imageRouter)


app.listen(PORT, () => console.log("Im your server baby, find me on port: ", PORT));
