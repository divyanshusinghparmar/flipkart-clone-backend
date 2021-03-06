import express from "express";
import dotenv from "dotenv";
//components
import Connection from "./database/db.js";
import DefaultData from "./default.js";

dotenv.config();

const app = express();

const PORT = 8000;

const username = process.env.DB_USERNAME;

const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`server is running on PORT ${8000}`));

// default data to database
DefaultData();
