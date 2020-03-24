const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({
    evento: "Semana Omnstack 11.0",
    aluno: "Junior G Silva"
  });
});

module.exports = routes;
