const express = require("express");
const Service = require("./src/service");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Lista de Usuarios",
    body: Service.getUsers(),
  });
});
app.get("/:id", (req, res) => {
    let { params : { id } } = req;
  res.json({
    message: "User con id " + req.params.id,
    body: Service.getUser(id),
  });
});
app.post("/", (req, res) => {
  let {body : newUser} = req;
  let user = Service.createUser(newUser);
  res.json({
    message: "Usuario creado",
    body: user,
  });
});
app.listen(PORT, () => {
  console.log(`ok funciona el nodemon ${PORT}`);
});

/* app.use(express.static("public")); */
