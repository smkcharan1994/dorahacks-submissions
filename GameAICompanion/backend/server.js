const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("GameAI Companion backend running!");
});

app.listen(port, () => {
  console.log(`Server live at http://localhost:${port}`);
});
