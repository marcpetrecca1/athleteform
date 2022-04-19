const express = require("express");
const app = express();
const PORT = 3000;
const playerRoutes = require("../db/router.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.use('/players', playerRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});