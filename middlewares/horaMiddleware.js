//Middleware para obtener la hora actual.
//De aquí sacaremos la hora. Recuerda que hay que pasarla como una req y 
// con js podemos obtener la fecha con new Date()

const time = (req, res, next) => {
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    str_minuto = new String (minutes)
    if (str_minuto.length == 1)
        minutes = "0" + minutes

    str_hora = new String (hour)
    if (str_hora.length == 1)
        hour = "0" + hour;

    req.actualHour = `${hour}:${minutes}`;
    //console.log(req.actualHour);
    next();
}

module.exports = time;