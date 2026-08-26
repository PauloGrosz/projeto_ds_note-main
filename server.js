const express = require ("express");

const app = require('./src');

const PORT = 3000;

app.get("/" , (req, res) => {
   res.send("API funcionamento !");
});

app.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT} `) ;
});