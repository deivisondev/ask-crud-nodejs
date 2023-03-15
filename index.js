const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { nome: "Kono Subarashii Sekai Ni Shukufuku Wo!" });
});

app.listen(3000, () => console.log("App rodando na porta 3000..."));
