const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { nome: "" });
});

app.listen(3000, () => console.log("App rodando na porta 3000..."));
