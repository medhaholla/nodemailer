const express = require("express");
const app = express();
const PORT = process.env.PORT || 5051;

app.listen(PORT, () => {
  console.log("server started !!!");
});
