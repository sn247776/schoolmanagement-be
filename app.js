import express from "express";
import {config} from "dotenv";


// Make sure config file on the top before using app
config({
    path:"./config/config.env"
})

const app = express();

app.get("/", (req, res) =>
  res.send(
    `<h1>Server is Working.</h1>`
  )
);

export default app;