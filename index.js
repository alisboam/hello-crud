const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuarioAline = {
  id: 1,
  nome: "aline",
  idade: 32,
};

const usuarios = [usuarioAline];

app.get("/usuarios", (req, res) => {
  req.json(usuarios);
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
