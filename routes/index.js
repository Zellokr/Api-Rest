"use strict";
const express = require("express");
const productCtrl = require("../controllers/product");
const userCtrl = require("../controllers/user");
const api = express.Router();
const auth = require("../middlewares/auth");

api.get("/product", productCtrl.getProducts);
api.get("/product/:productId", productCtrl.getProduct);
api.post("/product", auth, productCtrl.saveProduct);
api.post("/signup", userCtrl.signUp);
api.post("/signin", userCtrl.signIn);
api.put("/product/:productId", auth, productCtrl.updateProduct);
api.delete("/product/:productId", auth, productCtrl.deleteProduct);
api.get("/private", auth, function(req, res) {
  res.status(200).send({ message: "Tienes Acceso" });
});

module.exports = api;
