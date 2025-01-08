//Módulo de ruta para la página final.

const express = require('express');
const router = express.Router();
const access = require('../middlewares/validarHora');

router.get('/', access, (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Ruta Final</h1>
            <p>¡Bienvenido a la ruta final!</p>
        </body>
        </html>
        `)
})

module.exports = router;