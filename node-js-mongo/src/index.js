const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("bienvenido a mi api");
});
/* middleware */
app.use(express.json());

app.use("/api", userRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("conectado a atlas"))
  .catch((err) => console.error(err));

app.listen(9000, () => console.log("server escuchando", port));
