const express = require("express");
const db = require("./db");
const errorMiddlewareFunc = require("./shared/errors/error");
const { port } = require("./shared/config");
const userRouter = require("./modules/users/_api");
const guideRoute = require("./modules/guides/_api");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(userRouter);
app.use(guideRoute);

app.use(errorMiddlewareFunc);

db();
app.listen(port, () => {
  console.log(`Server ${port}-portda ishlayapti.`);
});
