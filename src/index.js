const express = require("express");
const db = require("./db");
const errorMiddlewareFunc = require("./shared/errors/error");
const { port } = require("./shared/config");
const userRouter = require("./modules/users/_api");

const app = express();

app.use(express.json());

app.use(errorMiddlewareFunc);

app.use(userRouter);

db();
app.listen(port, () => {
  console.log(`Server ${port}-portda ishlayapti.`);
});
