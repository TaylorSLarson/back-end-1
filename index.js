const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/users", (req, res) => {
    let friends =[ "Jace", "Kayla", "Ryder", "Brendon", "Micah", "Savanna"];
    res.status(200).send(phrase);
})

app.get("/weather/:temperature", (req, res) =>{
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
})

app.listen(5500, () => console.log("Server running on port 5500"))