/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const http = require("http");
const server = http.createServer();
const app = express();
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");
const userModels = require("./models/user");

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PWD}@tree.pxvkm.gcp.mongodb.net/Tree?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

//const {APP_PORT} = process.env;
const port = 3100;

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use(bodyParser.json());
//app.use("/user", user);

app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
    res.json({message: "API Working"});
});
app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(port, () =>
    console.log(`🚀 Server is listening at http://localhost:${port}.`),
);

module.exports = app;
