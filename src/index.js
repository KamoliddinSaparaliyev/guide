const express = require("express");
const db = require("./db");
const errorMiddlewareFunc = require("./shared/errors/error");
const { port } = require("./shared/config");
const userRouter = require("./modules/users/_api");
const guideRoute = require("./modules/guides/_api");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(errorMiddlewareFunc);

app.use(userRouter);
app.use(guideRoute);

db();
app.listen(port, () => {
  console.log(`Server ${port}-portda ishlayapti.`);
});
