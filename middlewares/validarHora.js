//Módulo que contiene la lógica de validación de la hora.
//Aquí estará la lógica de si accedemos a la siguiente ruta
//res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`;
//return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));

const access = (req, res, next) => {
    const hour = new Date().getHours();

    if (hour < 12) {
        res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar.`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    } 
    next();
}

module.exports = access;