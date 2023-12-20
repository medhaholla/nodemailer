const express = require("express");
const app = express();
const PORT = process.env.PORT || 5051;
const appRoute = require("./router/router.js");

app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log("server started !!!");
});
