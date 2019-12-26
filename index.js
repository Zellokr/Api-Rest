const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config.js");

mongoose.connect(config.db, (err, res) => {
  if (err) throw err;
  console.log("Conexion a la BBDD establecida");
  app.listen(config.port, () => {
    console.log(`Servidor corriendo en puerto: ${config.port}`);
  });
});
