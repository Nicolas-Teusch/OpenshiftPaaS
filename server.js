const express = require('express');
const app = express();

const PORT = 8080;

app.get("/*", (req, res) => res.send("Hallo wie gehts?"));


app.listen(PORT, () => console.log("Server is listening on PORT: " + PORT));

