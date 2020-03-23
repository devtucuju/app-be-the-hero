const express = require("express");

const app = express();

app.listen(3333);
app.get("/", (req, res) => {
  return res.json({
    evento: "Semana Omnstack 11.0",
    aluno: "Junior G Silva"
  });
});
