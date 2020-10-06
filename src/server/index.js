/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";
import connectDB from "./config/db";
import authRoute from "./routes/auth";
// Import des routes
const treeRoutes = require("./routes/tree");
const userRoutes = require("./routes/user");

// const Tree = require("./models/tree");
// const User = require("./models/user");

const {APP_PORT, DB_USER} = process.env;
console.log(`${DB_USER} very much`);

const app = express();

// CONNECT DATABASE
connectDB();
// DEFINE ROUTES
app.use("/api/tree", treeRoutes);
app.use("/api/user", userRoutes);
// Init Middlewares
app.use(express.json({extended: false}));

app.use("/api/users", require("./routes/user"));
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use("/auth", authRoute);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
