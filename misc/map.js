const fs = require('fs');

let leerArchivo = (path) => {

    let archivo = fs.readFileSync(path,'utf8');
    let renglones = archivo.split('\r\n');
    let datos = [];
    for (let i = 0; i < renglones.length; i++) {
        let tiles = renglones[i].split(',');
        datos.push(tiles);
    }

    return datos;
};

module.exports = {
    leerArchivo
};