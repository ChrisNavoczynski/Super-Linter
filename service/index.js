//import express from express
const express = require("express");
const app = express();
const port = 8800;

app.get("/", (request, response) => {
    response.send("Welcome to Dungeons & Dragons, traveler: What is your Class?");
});

app.listen(port, () => {
    console.log(`My app is listening at http://localhost:${port}`);
});