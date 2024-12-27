//la ruta la estamos trabajando desde app.js
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const endRouter = require('./routes/endroute');


app.use('/endroute', endRouter);
app.use('/', indexRouter);

app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>')
})

app.listen(3000, () => {
    console.log('Server listening on port http://localhost:3000');
})