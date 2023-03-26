const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");

// Configuração do body-parser e cors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Definição das rotas
app.use(router);

app.listen(3000, () => {
  console.log("Servidor Ligado: Porta 3000");
});
