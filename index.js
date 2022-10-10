const express = require("express");

const createTokenRouter = require("./Router/createTokenRouter");
const checkTokenRouter = require("./Router/checkTokenRouter");

const app = express();
const port = 3000; // 서버 포트번호

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/create", createTokenRouter);
app.use("/check", checkTokenRouter);

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
