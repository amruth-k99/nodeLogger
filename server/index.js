const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const httpLogger = require("../logs/middleware/httplogger");
const { logger } = require("../logs/utils/logger");

const port = process.env.PORT || 4000;

app.use(httpLogger);

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ Greet: "Hello" });
});

app.get("/test", (req, res) => {
  res.json({ description: "Test" });
});

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
