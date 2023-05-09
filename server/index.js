"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const express = require("express");
const path = require("path");
const cors = require("cors");
// Inicializo la app y asigno el puerto
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
// Creo la colección de usuarios
const userCollection = db_1.firestore.collection("users");
// Trae el environment (prueba)
app.get("/env", function (req, res) {
    res.json({
        Mensaje: "Bienvenio a la API de Angry Termy :D",
    });
});
// Trae el environment del hosting
// app.get("/db-env", (req, res) => {
//     res.json({
//         "db-host": process.env.DB_HOST,
//     });
// });
// Chequea que el nombre de usuario no exista y lo crea
app.post("/player-name", function (req, res) {
    var name = req.body.name;
    userCollection.where("name", "==", name)
        .get().then(function (searchRes) {
        if (searchRes.empty) {
            userCollection.add({
                name: name
            }).then(function (newUserRef) {
                res.json({
                    id: newUserRef.id,
                    "new": true
                });
            });
        }
        else {
            res.status(200).json({
                Mensaje: "Este nombre ya existe boludo, me estas jodiendo?..."
            });
        }
    });
});
const relativeRoute = path.resolve(__dirname, "../dist");
app.use(express.static(relativeRoute));
app.get("*", (req, res) => {
    res.sendFile(relativeRoute + "/index.html");
});
app.listen(port, function () {
    console.log("Iniciado en el puerto:", port);
});
