/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";
import mongoose from "mongoose"; //Arti:test

const {APP_PORT, DB_USER, DB_TEST} = process.env;
console.log(`${DB_USER} very much`); //Arti:test

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

// Arti:test
try {
    mongoose.connect(DB_TEST, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    console.log("Connected!");
} catch (error) {
    console.log(error);
}
