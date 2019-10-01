const express = require("express");
const app = express();
app.use(express.json());
const route = require("./routes/route");
app.use("/user", route);
app.listen(8000, () => {
  console.log("server connected");
});
