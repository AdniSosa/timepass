//Módulo de ruta para la página final.

const express = require('express');
const router = express.Router();
const access = require('../middlewares/validarHora');
const time = require('../middlewares/horaMiddleware');

router.get('/', time, access, (req, res) => {
    res.send('<h1>Ruta Final</h1><p>¡Bienvenido a la ruta final!</p>')
})

module.exports = router;