const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/boas-vindas", (req, res) => {
  res.sendFile(__dirname + "/boas-vindas.html");
});

app.post("/boas-vindas", (req, res) => {
  const { login, senha } = req.body;
  console.log(login, senha);
  res.sendFile(__dirname + "/boas-vindas.html");
});

app.listen(8080, () => {
  console.log("Servidor em execução...");
});
