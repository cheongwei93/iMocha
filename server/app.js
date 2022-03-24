const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

let http = require("http").createServer(app);
const port = process.env.PORT || 3303;

http.listen(`${port}`, function () {
  console.log(`socket is listening to :${port}`);
});

app.use(bodyParser.json());
app.use(cors());

app.use("/user", require("./routes/user/user"));
app.use("/state", require("./routes/state/state"));
